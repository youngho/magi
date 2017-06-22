package kr.famos.bets.dutmap.dutmapyield.service;
/**
 * BETS-UI-0303
 * DUT Map Yiled
 * BIN Selection 이 정해지지 않을 경우에는 PASS BIN의 비율을 보여준다
 * BIN Selection 에서 선택한 BIN의 비율을 보여준다
 */

import com.google.gson.Gson;
import kr.famos.bets.dutmap.dutmapyield.dto.DutMapYieldDto;
import kr.famos.bets.dutmap.dutmapyield.mapper.DutMapYieldMapper;
import kr.famos.bets.dutmap.singledut.service.SingleDutMapService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.*;


@Service
public class DutMapYieldService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    DutMapYieldMapper dutMapYieldMapper;

    public List<?> retrieveCompoDutMap(DutMapYieldDto dutMapYieldDto) {
        List<LinkedHashMap<String, Object>> returnDto = new ArrayList<>();
        logger.debug("UI BIN Selection ::: " + dutMapYieldDto.getBinSelection());    //화면에서 BIN Selection 으로 조회한 값
        logger.debug("UI BIN Yield Lower Limit::: " + dutMapYieldDto.getBinYieldLowerLimit());    //
        logger.debug("UI BIN Yield Lower Upper::: " + dutMapYieldDto.getBinYieldUpperLimit());    //
        int binXrequestValue = 0;
        double binYieldLowerLimit = 100;
        double binYieldUpperLimit = 0;

        /**
         * dutMapYieldDto 로 넘어온 조회 값(String)을 int, double로 변환
         */
        if (dutMapYieldDto.getBinSelection() != "") {
            binXrequestValue = Integer.valueOf(dutMapYieldDto.getBinSelection());   //화면에서 BIN Selection 으로 조회한 값을 int형 변수 binXrequestValue 로 관리
            logger.debug("binXrequestValue ::: " + binXrequestValue);
            if (dutMapYieldDto.getBinYieldLowerLimit() != "") {
                binYieldLowerLimit = Double.parseDouble(dutMapYieldDto.getBinYieldLowerLimit());
                logger.debug("binYieldLowerLimit ::: " + binYieldLowerLimit);
            }
            if (dutMapYieldDto.getBinYieldUpperLimit() != "") {
                binYieldUpperLimit = Double.parseDouble(dutMapYieldDto.getBinYieldUpperLimit());
                logger.debug("binYieldUpperLimit ::: " + binYieldUpperLimit);
            }
        }

        // List<DTO> 리턴형식으로로 DB 조회
        List<DutMapYieldDto> lstDutMapYieldDto = dutMapYieldMapper.retrieveDutMapYield(dutMapYieldDto);

        if (lstDutMapYieldDto.size() != 0) {

            int inputBinSum = 0;
            int passBinSum = 0;
            int maxDut = 0;         // maxDut 을 이용하여 2차원 배열 생성
            
            // 조회된 리스트중에 가장 큰 DUT를 구한다
            // 이것을 사용하여 보여줄 MAP을 만든다
            for (DutMapYieldDto dut : lstDutMapYieldDto) {
                String strDut = dut.getDutMainBin().replaceAll(",", "");
                if (maxDut < strDut.length()) {
                    maxDut = strDut.length();
                }
            }

            //DUT_MAIN_BIN 컬럼의 값을 intDutMap 이라는 2차원 배열에 넣는다.
            int[][] intDutMap = new int[maxDut][lstDutMapYieldDto.size()];  //위의 maxDut 을 이용하여 2차원 배열 생성
            int index = 0;
            for (DutMapYieldDto dut : lstDutMapYieldDto) {
                String strDut = dut.getDutMainBin().replaceAll(",", "");
                for (Integer i = 0; i < strDut.length(); i++) {
                    if (!Character.toString(strDut.charAt(i)).equals("A")) {
                        intDutMap[i][index] = Character.getNumericValue(strDut.charAt(i));
                    }
                }
                index++;
            }

            
            int[][] intDutMap2 = new int[8][maxDut];
            int[] intDutMapInputBinTotal = new int[maxDut];
            int[] intDutMapPassBinTotal = new int[maxDut];
            int[] binXCount = new int[maxDut];              //
            Map<Integer, Integer> mapDutMapTotal = new TreeMap<>();


            /**
             * DUT 개수만큼 루프
             */
            for (int i = 0; i < maxDut; i++) {
                Map<Integer, Integer> mapDutMap = new TreeMap<>();

                //빈에 총겟수를 구하기위해 메인빈번호를 키값으로 셋팅
                for (int k = 1; k <= 8; k++) {
                    mapDutMap.put(k, 0);
                    mapDutMapTotal.put(k, 0);
                }

                /**
                 * j는 조회 목록의 개수만큼 반복한다.
                 */
                for (int j = 0; j < lstDutMapYieldDto.size(); j++) {
                    if (intDutMap[i][j] != 0 && mapDutMap.containsKey(intDutMap[i][j])) {
                        mapDutMap.put(intDutMap[i][j], mapDutMap.get(intDutMap[i][j]) + 1);
                        //Total
                        mapDutMapTotal.put(intDutMap[i][j], mapDutMapTotal.get(intDutMap[i][j]) + 1);
                    }
                }

                /**
                 *
                 */
                for (int k = 0; k < 8; k++) {
                    intDutMap2[k][i] = mapDutMap.get(k + 1);
                    intDutMapInputBinTotal[i] = intDutMapInputBinTotal[i] + mapDutMap.get(k + 1);
                    if (k < 4) {
                        intDutMapPassBinTotal[i] = intDutMapPassBinTotal[i] + mapDutMap.get(k + 1); // 배열의 0, 1, 2, 3 요소에 있는 값을 PassBIN으로 누적한다
                    }
                    if (k == binXrequestValue - 1) {            // binXrequestValue 의 값이 UI에서 1 ~ 8 까지 들어오기 때문에
                        binXCount[i] = mapDutMap.get(k + 1);
                    }
                }
                inputBinSum += intDutMapInputBinTotal[i];
                passBinSum += intDutMapPassBinTotal[i];
            }

            //input 및 Pass bin 수율추가
            LinkedHashMap<String, Object> inputRow = new LinkedHashMap<>();
//            LinkedHashMap<String, Object> mapDutMapPassBIN = new LinkedHashMap<>();
            LinkedHashMap<String, Object> dutYieldRow = new LinkedHashMap<>();
            DecimalFormat format = new DecimalFormat("#.##");

            for (int j = 0; j < maxDut; j++) {
                inputRow.put("mainProgramName", "Input");
                inputRow.put("InputTotal", inputBinSum);
                inputRow.put("DUT" + String.valueOf(j + 1), intDutMapInputBinTotal[j]);

//                mapDutMapPassBIN.put("mainProgramName", "Pass");
//                mapDutMapPassBIN.put("InputTotal", passBinSum);
//                mapDutMapPassBIN.put("DUT" + String.valueOf(j + 1), intDutMapPassBinTotal[j]);

                dutYieldRow.put("partNumber", lstDutMapYieldDto.get(0).getPartNumber());
                dutYieldRow.put("processCode", lstDutMapYieldDto.get(0).getProcessCode());
                dutYieldRow.put("testerNumber", lstDutMapYieldDto.get(0).getTesterNumber());
                dutYieldRow.put("lotId", lstDutMapYieldDto.get(0).getLotId());
                dutYieldRow.put("boardId", lstDutMapYieldDto.get(0).getBoardId());
                dutYieldRow.put("head", lstDutMapYieldDto.get(0).getHead());
                dutYieldRow.put("mainProgramName", lstDutMapYieldDto.get(0).getMainProgramName());
//                dutYieldRow.put("testCounter", lstDutMapYieldDto.get(0).getTestCounter());
//                dutYieldRow.put("mainBIN", "Yield");
//                dutYieldRow.put("total", String.valueOf(format.format(passBinSum / (double) inputBinSum * 100)));
                dutYieldRow.put("InputTotal", inputBinSum);

                //
                if (intDutMapInputBinTotal[j] != 0 && binXrequestValue == 0) {   //피제수(inputBinTotal)가 0일경우 처리(있을수 없으나 테스트 데이터일 경우), + UI에서 BIN Selection에 값을 조회하지 않은 경우, 계산을 하지 않고 0을 넣는다.
                    logger.debug("DUT " + String.valueOf(j + 1) + " PASS BIN YIELD");
                    dutYieldRow.put("DUT" + String.valueOf(j + 1), (intDutMapPassBinTotal[j] / (double) intDutMapInputBinTotal[j]) * 100);
                } else if (intDutMapInputBinTotal[j] != 0 && binXrequestValue < 5) { // binXrequestValue 가 PAS_BIN(1,2,3,4)일 경우 작은것을 조회한다
                    logger.debug("DUT " + String.valueOf(j + 1) + " YIELD = " + binXCount[j] + "/" + intDutMapInputBinTotal[j] + " of BIN " + binXrequestValue);
                    if (((binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100) < binYieldLowerLimit) {
                        dutYieldRow.put("DUT" + String.valueOf(j + 1), (binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100);
                    }
                } else if (intDutMapInputBinTotal[j] != 0 && binXrequestValue > 4) { // binXrequestValue 가 (5,6,7,8) 일 경우 작은것을 조회한다
                    logger.debug("DUT " + String.valueOf(j + 1) + " YIELD = " + binXCount[j] + "/" + intDutMapInputBinTotal[j] + " of BIN " + binXrequestValue);
                    if (((binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100) > binYieldUpperLimit) {
                        dutYieldRow.put("DUT" + String.valueOf(j + 1), (binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100);
                    }
                }
//                else {
//                    logger.debug("DUT " + String.valueOf(j + 1) + " is 0 Value !!!");
//                    dutYieldRow.put("DUT" + String.valueOf(j + 1), "0");
//                }

            }
//            returnDto.add(mapDutMapPassBIN);
            returnDto.add(dutYieldRow);
            returnDto.add(inputRow);
        }
        return returnDto;
    }
}