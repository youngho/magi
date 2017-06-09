package kr.famos.bets.efficiencyAnalysis.testEfficiency.service;

import kr.famos.bets.dutmap.singledut.service.SingleDutMapService;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.dto.*;
import kr.famos.bets.efficiencyAnalysis.testEfficiency.mapper.TestEfficiencyMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * BETS-UI-0601
 * Test Efficiency
 */
@Service
public class TestEfficiencyService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    TestEfficiencyMapper testEfficiencyMapper;

    /**
     * 효율 계산 부분
     * 효율을 계산하기 위한 TIME들 중 일부 항목은 MAIN_BIN에 위치하고 (LOT 단위로 시간을 측정하는 부분)
     * 일부항목은 CASI_BIN 에 있기 때문에 (SHOT_START, SHOT_END) 두종류의 데이터를 모두 더해야 한다.
     * 8 개 loseTime를 계산한다
     * 1.Lot Change	: 이전 lot의 test가 완료된 이후부터 다음 lot의 test_in이 될 때까지 시간
     * 2.PGM Loading : lot이 test_in 이후부터 program을 가져와서 loading까지의 시간
     * 3.H/D Loading : Program loading 이후 H/D로부터 최초의 test start signal이 발생까지의 시간
     * 4.test time 1/n shot
     * 5.retest loading time
     * 6.retest
     * 7.unload time : 최종 retest 결과 발생 시간부터 최종 완료 신호까지의 시간
     * 8.SBL time :	작업자가 Bin 값을 처리하는 시간, FINAL_END_TIME이 PRELOT_END_TIME과 동일
     *
     * @param testEfficiencyCondDto
     * @return
     */
    public TestEfficiencyResultDto retrieveTestEfficiency(TestEfficiencyCondDto testEfficiencyCondDto) {
        TestEfficiencyResultDto returnDto = new TestEfficiencyResultDto();  // 리턴용 DTO
        MainTimeResultDto mainTimeResultDto = new MainTimeResultDto();      // MAIN_BIN 테이블에서 Header 정보에 적혀있는 값을 리턴받는 DTO
        CasiTimeCondDto casiTimeCondDto = new CasiTimeCondDto();            // CASI_BIN 테이블에서 Shot 별 시간을 조회하기 위한 조건
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");   // 14자리 문자형식의 날짜를 Date형으로 변환하기위한 포맷

        /**
         * UI에서 조회 조건인 조회기간, 테스트 넘버에 해당하는 데이터를 MAIN_BIN 에서 조회한다. 여려 테스트 결과가 리턴된다
         */
        List<MainTimeResultDto> resultDtos = testEfficiencyMapper.retrieveTestEfficiency(testEfficiencyCondDto);
        for (MainTimeResultDto list : resultDtos) {
            returnDto.setTesterNumber(list.getTesterNumber());
            returnDto.setLoseTimeOfLotChage(returnDto.getLoseTimeOfLotChage() + list.getLoseTimeOfLotChage());  // 1.LOT별 LOT Lot Change 시간을 returnDto 에 누적한다
            returnDto.setLoseTimeOfPgmLoading(returnDto.getLoseTimeOfPgmLoading() + list.getLoseTimeOfPgmLoading());    // 2.LOT 별 PGM Loading
            returnDto.setLoseTimeOfSbl(returnDto.getLoseTimeOfSbl() + list.getLoseTimeOfSbl()); // 8.LOT 별 SBL 시간 누적

            casiTimeCondDto.setTesterNumber(list.getTesterNumber());
            casiTimeCondDto.setProcessCode(list.getProcessCode());
            casiTimeCondDto.setLotId(list.getLotId());

            /**
             * 테스트넘버, 프로세스코드, LOT_ID 로 조회하여 TEST_COUTER, TEST_FLOW 로 GROUP BY 하여 다중행을 리턴받는다
             * TEST_COUTER ASC 로 정렬되어 리스트를 반복하며 retest loading time 을 누적한다.
             */
            List<CasiTimeResultDto> casiTimeResultDtos = testEfficiencyMapper.retrieveCasiTime(casiTimeCondDto);
            String strLastShotEndTime = "00000000000000"; // retest loading time 을 구하기 위한변수
            if (casiTimeResultDtos.size() > 0) { // 공정별로 CASI가 없는 경우도 있다
                for (CasiTimeResultDto casiList : casiTimeResultDtos) {
                    /**
                     *  prime 테스트 타암을 조회하여 H/D Loading , test time 1/n shot 를 구한다.
                     */
                    if (casiList.getTest_counter() == 0) {    // TEST_COUNTER 가 0 이면 PRIME 테스트로 처리
                        try {
                            Date shotStartTime = dateFormat.parse(casiList.getShotStartTime());
                            Date lotInEndTime = dateFormat.parse(list.getLotInEndTime());
                            long hdLoadingTime = (shotStartTime.getTime() - lotInEndTime.getTime()) / 1000; // 초 단위로 변환
                            returnDto.setLoseTimeOfHdLoading(returnDto.getLoseTimeOfHdLoading() + hdLoadingTime);   // 3.H/D Loading
                        } catch (ParseException e) {
                            e.printStackTrace();
                        }
                        // testTime
                        returnDto.setLoseTimeOfTestTime(returnDto.getLoseTimeOfTestTime() + casiList.getTestTimeSum());   // 4.test time
                    } // End of if

                    /**
                     * retest 를 조회하여 retest time 을 구한다
                     */
                    if (casiList.getTest_counter() != 0) {
                        // retestTime
                        returnDto.setLoseTimeOfRetest(returnDto.getLoseTimeOfRetest() + casiList.getTestTimeSum()); // 6.retest time
                    }

                    /**
                     * FINAL RETEST 를 조회하여 unload time 을 구한다
                     */
                    if (casiList.getTest_flow().equals("FINAL")) {    // TEST_FLOW 가 FINAL 이면 마지막 테스트로 처리
                        try {
                            Date retestEndTime = dateFormat.parse(casiList.getShotEndTime());
                            Date finalEndTime = dateFormat.parse(list.getFinalEndTime());
                            long unloadTime = (finalEndTime.getTime() - retestEndTime.getTime()) / 1000; // 초 단위로 변환
                            returnDto.setLoseTimeOfUnload(returnDto.getLoseTimeOfUnload() + unloadTime);    // 7.unload time
                        } catch (ParseException e) {
                            e.printStackTrace();
                        }
                    } // End of if

                    /**
                     * 루프를 도는 동안 각 테스트 간의 로딩 타임을 누적한다
                     */
                    try {
                        Date nowShotStart = dateFormat.parse(casiList.getShotStartTime());
                        Date lastShotEndTime = dateFormat.parse(strLastShotEndTime);
                        long retestLoadingTime = (lastShotEndTime.getTime() - nowShotStart.getTime()) / 1000; // 초 단위로 변환
                        returnDto.setLoseTimeOfRetestLoading(returnDto.getLoseTimeOfRetestLoading() + retestLoadingTime);
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }
                } // End of for
            } // End of if
        }
        return returnDto;
    } // End Of retrieveTestEfficiency

    /**
     * 조회 조건으로 사용된 LotID 조회
     * @param testEfficiencyCondDto
     * @return
     */
    public List<EfficiencyUsingLotDto> retrieveUsingLot(TestEfficiencyCondDto testEfficiencyCondDto) {
        MainTimeResultDto mainTimeResultDto = new MainTimeResultDto();      // MAIN_BIN 테이블에서 Header 정보에 적혀있는 값을 리턴받는 DTO
        List<EfficiencyUsingLotDto> returnDtos = new ArrayList<>();

        List<MainTimeResultDto> resultDtos = testEfficiencyMapper.retrieveTestEfficiency(testEfficiencyCondDto);
        for (MainTimeResultDto list : resultDtos){
            EfficiencyUsingLotDto efficiencyUsingLotDto = new EfficiencyUsingLotDto();
            efficiencyUsingLotDto.setLotId(list.getLotId());
            efficiencyUsingLotDto.setProcessCode(list.getProcessCode());
            efficiencyUsingLotDto.setTesterNumber(list.getTesterNumber());
            returnDtos.add(efficiencyUsingLotDto);
        }
        return returnDtos;
    } // End Of retrieveUsingLot

} // End Of Service
