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

    public String retrieveCompoDutMap(DutMapYieldDto dutMapYieldDto) {

        logger.debug("UI BIN Selection ::: " + dutMapYieldDto.getBinSelection());    //화면에서 BIN Selection 으로 조회한 값
        logger.debug("UI BIN Yield Lower Limit::: " + dutMapYieldDto.getBinYieldLowerLimit());    //
        logger.debug("UI BIN Yield Lower Upper::: " + dutMapYieldDto.getBinYieldUpperLimit());    //
        int binXrequestValue = 0;
        double binYieldLowerLimit = 100;
        double binYieldUpperLimit = 0;
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

            int maxDut = 0;
            // 조회된 리스트중에 가장 큰 DUT를 구한다
            // 이것을 사용하여 보여줄 MAP을 만든다
            for (DutMapYieldDto dut : lstDutMapYieldDto) {
                String strDut = dut.getDutMainBin().replaceAll(",", "");
                if (maxDut < strDut.length()) {
                    maxDut = strDut.length();
                }
            }

            //DUT_MAIN_BIN을 배열에 넣는다.
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


            for (Integer i = 0; i < maxDut; i++) {
                Map<Integer, Integer> mapDutMap = new TreeMap<>();
                //빈에 총겟수를 구하기위해 메인빈번호를 키값으로 셋팅
                for (int k = 1; k <= 8; k++) {
                    mapDutMap.put(k, 0);
                    mapDutMapTotal.put(k, 0);
                }
                for (int j = 0; j < lstDutMapYieldDto.size(); j++) {
                    //"A"값을 0으로 빠꾸었기 때문에 제외, mapDutMap키와 일치하는 intDutMap[i][j]값이 있으면 1씩증가시켜 메인빈 합계를 구한다.
                    if (intDutMap[i][j] != 0 && mapDutMap.containsKey(intDutMap[i][j])) {
                        mapDutMap.put(intDutMap[i][j], mapDutMap.get(intDutMap[i][j]) + 1);
                        //Total
                        mapDutMapTotal.put(intDutMap[i][j], mapDutMapTotal.get(intDutMap[i][j]) + 1);
                    }
                }

                // 행렬에 치환을 위해 합계 값을 배열에 넎는다.
                for (int k = 0; k < 8; k++) {
                    intDutMap2[k][i] = mapDutMap.get(k + 1);
                    intDutMapInputBinTotal[i] = intDutMapInputBinTotal[i] + mapDutMap.get(k + 1);
                    if (k < 4) {
                        intDutMapPassBinTotal[i] = intDutMapPassBinTotal[i] + mapDutMap.get(k + 1);
                    }
                    if (k == binXrequestValue) {
                        binXCount[i] = mapDutMap.get(k + 1);
                    }
                }
                inputBinSum += intDutMapInputBinTotal[i];
                passBinSum += intDutMapPassBinTotal[i];
            }
            //행령을 치환하여 Map에 넎고 다시 List에 추가 하다.
            List<LinkedHashMap<String, String>> arrayMapDutMap = new ArrayList<>();
            /*
            for (Integer i = 0; i < 8; i++) {
                LinkedHashMap<String, String> mapDutMap = new LinkedHashMap<>();
                //메인 빈 번호를 넣는다.
                mapDutMap.put("partNumber", lstDutMapYieldDto.get(0).getPartNumber());
                mapDutMap.put("processCode", lstDutMapYieldDto.get(0).getProcessCode());
                mapDutMap.put("testerNumber", lstDutMapYieldDto.get(0).getTesterNumber());
                mapDutMap.put("lotId", lstDutMapYieldDto.get(0).getLotId());
                mapDutMap.put("boardId", lstDutMapYieldDto.get(0).getBoardId());
                mapDutMap.put("head", lstDutMapYieldDto.get(0).getHead());
                mapDutMap.put("mainProgramName", lstDutMapYieldDto.get(0).getMainProgramName());
                mapDutMap.put("testCounter", lstDutMapYieldDto.get(0).getTestCounter());
                mapDutMap.put("mainBIN", String.valueOf(i + 1));
                mapDutMap.put("total", String.valueOf(mapDutMapTotal.get(i + 1)));
                for (int j = 0; j < maxDut; j++) {
                    mapDutMap.put("DUT" + String.valueOf(j + 1), String.valueOf(intDutMap2[i][j]));
                }
                arrayMapDutMap.add(mapDutMap);
                mapDutMap = null;
            }
*/
            //input 및 Pass bin 수율추가
            LinkedHashMap<String, String> mapDutMapInputBIN = new LinkedHashMap<>();
            LinkedHashMap<String, String> mapDutMapPassBIN = new LinkedHashMap<>();
            LinkedHashMap<String, String> mapDutMapYildBIN = new LinkedHashMap<>();
            DecimalFormat format = new DecimalFormat("#.##");

            for (int j = 0; j < maxDut; j++) {
                mapDutMapInputBIN.put("mainProgramName", "Input");
                mapDutMapInputBIN.put("InputTotal", String.format("%,d", inputBinSum));
                mapDutMapInputBIN.put("DUT" + String.valueOf(j + 1), String.format("%,d", intDutMapInputBinTotal[j]));

                mapDutMapPassBIN.put("mainProgramName", "Pass");
                mapDutMapPassBIN.put("InputTotal", String.format("%,d", passBinSum));
                mapDutMapPassBIN.put("DUT" + String.valueOf(j + 1), String.format("%,d", intDutMapPassBinTotal[j]));

                mapDutMapYildBIN.put("partNumber", lstDutMapYieldDto.get(0).getPartNumber());
                mapDutMapYildBIN.put("processCode", lstDutMapYieldDto.get(0).getProcessCode());
                mapDutMapYildBIN.put("testerNumber", lstDutMapYieldDto.get(0).getTesterNumber());
                mapDutMapYildBIN.put("lotId", lstDutMapYieldDto.get(0).getLotId());
                mapDutMapYildBIN.put("boardId", lstDutMapYieldDto.get(0).getBoardId());
                mapDutMapYildBIN.put("head", lstDutMapYieldDto.get(0).getHead());
                mapDutMapYildBIN.put("mainProgramName", lstDutMapYieldDto.get(0).getMainProgramName());
//                mapDutMapYildBIN.put("testCounter", lstDutMapYieldDto.get(0).getTestCounter());
//                mapDutMapYildBIN.put("mainBIN", "Yield");
//                mapDutMapYildBIN.put("total", String.valueOf(format.format(passBinSum / (double) inputBinSum * 100)));
                mapDutMapYildBIN.put("InputTotal", String.format("%,d", inputBinSum));

                if (intDutMapInputBinTotal[j] != 0 && binXrequestValue == 0) {   //피제수(inputBinTotal)가 0일경우 처리(있을수 없으나 테스트 데이터일 경우), + UI에서 BIN Selection에 값을 조회하지 않은 경우, 계산을 하지 않고 0을 넣는다.
                    logger.debug("DUT " + String.valueOf(j + 1) + " PASS BIN YIELD");
                    mapDutMapYildBIN.put("DUT" + String.valueOf(j + 1), format.format((intDutMapPassBinTotal[j] / (double) intDutMapInputBinTotal[j]) * 100));
                } else if (intDutMapInputBinTotal[j] != 0 && binXrequestValue < 5) { // binXrequestValue 가 PAS_BIN(1,2,3,4)일 경우 작은것을 조회한다
                    logger.debug("DUT " + String.valueOf(j + 1) + " YIELD = " + binXCount[j] + "/" + intDutMapInputBinTotal[j] + " of BIN " + binXrequestValue);
                    if (((binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100) < binYieldLowerLimit) {
                        mapDutMapYildBIN.put("DUT" + String.valueOf(j + 1), format.format((binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100));
                    }
                } else if (intDutMapInputBinTotal[j] != 0 && binXrequestValue > 4) { // binXrequestValue 가 (5,6,7,8) 일 경우 작은것을 조회한다
                    logger.debug("DUT " + String.valueOf(j + 1) + " YIELD = " + binXCount[j] + "/" + intDutMapInputBinTotal[j] + " of BIN " + binXrequestValue);
                    if (((binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100) > binYieldUpperLimit) {
                        mapDutMapYildBIN.put("DUT" + String.valueOf(j + 1), format.format((binXCount[j] / (double) intDutMapInputBinTotal[j]) * 100));
                    }
                }
//                else {
//                    logger.debug("DUT " + String.valueOf(j + 1) + " is 0 Value !!!");
//                    mapDutMapYildBIN.put("DUT" + String.valueOf(j + 1), "0");
//                }

            }
//            arrayMapDutMap.add(mapDutMapPassBIN);
            arrayMapDutMap.add(mapDutMapYildBIN);
            arrayMapDutMap.add(mapDutMapInputBIN);

            Gson gson = new Gson();
            String strJson = gson.toJson(arrayMapDutMap);
            return strJson;
        } else {
            String strJson = "[{" + "\"" + "Message" + "\"" + ":" + "\"" + "No data available in table" + "\"" + "}]";
            return strJson;
        }
    }
}