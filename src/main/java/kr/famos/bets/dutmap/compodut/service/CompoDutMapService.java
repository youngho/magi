package kr.famos.bets.dutmap.compodut.service;

import kr.famos.bets.dutmap.compodut.dto.CompoDutMapDto;
import kr.famos.bets.dutmap.compodut.dto.CompoDutMapResultDto;
import kr.famos.bets.dutmap.compodut.mapper.CompoDutMapMapper;
import kr.famos.bets.dutmap.singledut.service.SingleDutMapService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-10.
 */
@Service
public class CompoDutMapService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    CompoDutMapMapper compoDutMapMapper;

    public List<CompoDutMapResultDto> retrieveCompoDutMap(CompoDutMapDto compoDutMapDto) {

        List<CompoDutMapResultDto> compoDutMapResultDtoList = new ArrayList<>();
        CompoDutMapResultDto totalRowDto = new CompoDutMapResultDto();
        List<CompoDutMapDto> compoDutMapDtoList = compoDutMapMapper.retrieveCompoDutMap(compoDutMapDto);
        totalRowDto.setPartNumber("TOTAL");

        String mainBinNumber = "";

        //8개의 MAIN_BIN을 설정한다.
        for (int i = 1; i < 9; i++) {
            CompoDutMapResultDto mainBinDto = new CompoDutMapResultDto();
            mainBinDto.setMainBin(String.valueOf(i));
            compoDutMapResultDtoList.add(mainBinDto);
        }

        //검색된 목록에서 MAIN_BIN 번호를 찾는다.
        for (CompoDutMapDto list : compoDutMapDtoList) {

            //DUT_MAIN_BIN 추출
            String strTemp = list.getDutMainBin();
            String strDutMain = strTemp.replaceAll(",","");
//            logger.debug("DUT_MAIN_BIN 콤마 제거후" + strDutMain);


            // 한 글자씩 화면에 출력
            for (int i = 0; i < strDutMain.length(); i++) {
                CompoDutMapResultDto rowDto = new CompoDutMapResultDto();
//                System.out.println( strDutMain.charAt(i) );

                if (i == 0) {
                    for (int j = 0; j < 8; j++) {

                        compoDutMapResultDtoList.get(j).setPartNumber(list.getPartNumber());
                        compoDutMapResultDtoList.get(j).setProcessCode(list.getProcessCode());
                        compoDutMapResultDtoList.get(j).setTesterModel(list.getTesterModel());
                        compoDutMapResultDtoList.get(j).setTesterNumber(list.getTesterNumber());
                        compoDutMapResultDtoList.get(j).setHead(list.getHead());
                        compoDutMapResultDtoList.get(j).setTestCounter(list.getTestCounter());
                        compoDutMapResultDtoList.get(j).setMainProgramName(list.getMainProgramName());

                        logger.debug("들어온 문자 비교 : " + Integer.toString((int)strDutMain.charAt(i)-48));
                        rowDto = compoDutMapResultDtoList.get(j);
                        if (j == (int)strDutMain.charAt(i) - 49) {
                            rowDto.setSocket1(rowDto.getSocket1() + 1);    //기존 소켓에 있는 빈번호의 숫자 카운팅을 가져와 1을 더한다.
                            logger.debug("포문" + rowDto.getSocket1());
                            rowDto.setTotal(rowDto.getTotal() + 1);
                            rowDto.setTotal(rowDto.getTotal() + 1);
                            compoDutMapResultDtoList.set(j, rowDto);
                            totalRowDto.setSocket1(totalRowDto.getSocket1() + 1);
                        }
                    }
                }
                if (i == 1) {for (int j = 0; j < 8; j++) {rowDto = compoDutMapResultDtoList.get(j);if (j == (int)strDutMain.charAt(i) - 49) {rowDto.setSocket2(rowDto.getSocket2() + 1);rowDto.setTotal(rowDto.getTotal() + 1);compoDutMapResultDtoList.set(j, rowDto);totalRowDto.setSocket2(totalRowDto.getSocket2() + 1);}}}
                if (i == 2) {for (int j = 0; j < 8; j++) {rowDto = compoDutMapResultDtoList.get(j);if (j == (int)strDutMain.charAt(i) - 49) {rowDto.setSocket3(rowDto.getSocket3() + 1);rowDto.setTotal(rowDto.getTotal() + 1);compoDutMapResultDtoList.set(j, rowDto);totalRowDto.setSocket3(totalRowDto.getSocket3() + 1);}}}
            }

//            CompoDutMapResultDto compoDutMapResultDto = new CompoDutMapResultDto();



        }
        //각소켓의 합을 구한다.
        compoDutMapResultDtoList.add(totalRowDto);

        return compoDutMapResultDtoList;
    }
}
