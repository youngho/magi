package kr.famos.bets.dutmap.compodut.service;

import com.google.gson.Gson;
import kr.famos.bets.dutmap.compodut.dto.CompoDutMapDto;
import kr.famos.bets.dutmap.compodut.mapper.CompoDutMapMapper;
import kr.famos.bets.dutmap.singledut.service.SingleDutMapService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.*;


@Service
public class CompoDutMapService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    CompoDutMapMapper compoDutMapMapper;

    public String retrieveCompoDutMap(CompoDutMapDto compoDutMapDto) {

        //NB_BIN과 같음
        List<CompoDutMapDto> lstCompoDutMapDto = compoDutMapMapper.retrieveCompoDutMap(compoDutMapDto);
        int inputBinSum = 0;
        int passBinSum = 0;

        int maxDut = 0;
        //가잗큰 Dut를 구한다.
        for (CompoDutMapDto dut : lstCompoDutMapDto) {
            String strDut = dut.getDutMainBin().replaceAll(",", "");

            if (maxDut < strDut.length()) {
                maxDut = strDut.length();
            }
        }

        //DUT_MAIN_BIN을 배열에 넣는다.
        int[][] intDutMap = new int[maxDut][lstCompoDutMapDto.size()];
        int index = 0;
        for (CompoDutMapDto dut : lstCompoDutMapDto) {
            String strDut = dut.getDutMainBin().replaceAll(",", "");
            for (Integer i = 0; i < strDut.length(); i++) {
                if (!Character.toString(strDut.charAt(i)).equals("A")) {
                    intDutMap[i][index] = Character.getNumericValue(strDut.charAt(i));
                }
            }
            index++;
        }


        //배열에 넣은 DUT_MAIN_BIN을 DUT번호 별로 MainBin(메인빈)별 갯수를 구해 Map엔 넣는다.
        int[][] intDutMap2 = new int[8][maxDut];
        //Dut별 MainBinTotal
        int[] intDutMapInputBinTotal = new int[maxDut];
        int[] intDutMapPassBinTotal = new int[maxDut];

        Map<Integer, Integer> mapDutMapTotal = new TreeMap<>();
        //빈에 총겟수를 구하기위해 메인빈번호를 키값으로 셋팅
        for (int k = 1; k <= 8; k++) {
            mapDutMapTotal.put(k, 0);
        }
        for (Integer i = 0; i < maxDut; i++) {
            //빈에 겟수를 구하기위해 메인빈번호를 키값으로 셋팅
            Map<Integer, Integer> mapDutMap = new TreeMap<>();
            for (int k = 1; k <= 8; k++) {
                mapDutMap.put(k, 0);
            }
            for (int j = 0; j < lstCompoDutMapDto.size(); j++) {
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
            }
            inputBinSum += intDutMapInputBinTotal[i];
            passBinSum += intDutMapPassBinTotal[i];
        }
        //행령을 치환하여 Map에 넎고 다시 List에 추가 하다.
        List<LinkedHashMap<String, String>> arrayMapDutMap = new ArrayList<>();
        for (Integer i = 0; i < 8; i++) {
            LinkedHashMap<String, String> mapDutMap = new LinkedHashMap<>();
            //메인 빈 번호를 넣는다.
            mapDutMap.put("PART_NUMBER", lstCompoDutMapDto.get(0).getPartNumber());
            mapDutMap.put("LOT_ID", lstCompoDutMapDto.get(0).getLotId());
            mapDutMap.put("PROCESS_CODE", lstCompoDutMapDto.get(0).getProcessCode());
            mapDutMap.put("BOARD_ID", lstCompoDutMapDto.get(0).getBoardId());
            mapDutMap.put("TESTER_NUMBER", lstCompoDutMapDto.get(0).getTesterNumber());
            mapDutMap.put("HEAD", lstCompoDutMapDto.get(0).getHead());
            mapDutMap.put("MAIN_PROGRAM_NAME", lstCompoDutMapDto.get(0).getMainProgramName());
            mapDutMap.put("TEST_COUNTER", lstCompoDutMapDto.get(0).getTestCounter());
            mapDutMap.put("MAIN_BIN", String.valueOf(i + 1));
            mapDutMap.put("TOTAL", String.valueOf(mapDutMapTotal.get(i + 1)));
            for (int j = 0; j < maxDut; j++) {
                mapDutMap.put("DUT" + String.valueOf(j + 1), String.valueOf(intDutMap2[i][j]));
            }
            arrayMapDutMap.add(mapDutMap);
            mapDutMap = null;
        }

        //input 및 Pass bin 수율추가
        LinkedHashMap<String, String> mapDutMapInputBIN = new LinkedHashMap<>();
        LinkedHashMap<String, String> mapDutMapPassBIN = new LinkedHashMap<>();
        LinkedHashMap<String, String> mapDutMapYildBIN = new LinkedHashMap<>();
        DecimalFormat format = new DecimalFormat("#.##");

        for (int j = 0; j < maxDut; j++) {
            mapDutMapInputBIN.put("PART_NUMBER", "");
            mapDutMapInputBIN.put("LOT_ID", "");
            mapDutMapInputBIN.put("PROCESS_CODE", "");
            mapDutMapInputBIN.put("BOARD_ID", "");
            mapDutMapInputBIN.put("TESTER_NUMBER", "");
            mapDutMapInputBIN.put("HEAD", "");
            mapDutMapInputBIN.put("MAIN_PROGRAM_NAME", "");
            mapDutMapInputBIN.put("TEST_COUNTER", "");
            mapDutMapInputBIN.put("MAIN_BIN", "InputBin");
            mapDutMapInputBIN.put("TOTAL", String.valueOf(inputBinSum));
            mapDutMapInputBIN.put("DUT" + String.valueOf(j + 1), String.valueOf(intDutMapInputBinTotal[j]));

            mapDutMapPassBIN.put("PART_NUMBER", "");
            mapDutMapPassBIN.put("LOT_ID", "");
            mapDutMapPassBIN.put("PROCESS_CODE", "");
            mapDutMapPassBIN.put("BOARD_ID", "");
            mapDutMapPassBIN.put("TESTER_NUMBER", "");
            mapDutMapPassBIN.put("HEAD", "");
            mapDutMapPassBIN.put("MAIN_PROGRAM_NAME", "");
            mapDutMapPassBIN.put("TEST_COUNTER", "");
            mapDutMapPassBIN.put("MAIN_BIN", "PassBin");
            mapDutMapPassBIN.put("TOTAL", String.valueOf(passBinSum));
            mapDutMapPassBIN.put("DUT" + String.valueOf(j + 1), String.valueOf(intDutMapPassBinTotal[j]));

            mapDutMapYildBIN.put("PART_NUMBER", "");
            mapDutMapYildBIN.put("LOT_ID", "");
            mapDutMapYildBIN.put("PROCESS_CODE", "");
            mapDutMapYildBIN.put("BOARD_ID", "");
            mapDutMapYildBIN.put("TESTER_NUMBER", "");
            mapDutMapYildBIN.put("HEAD", "");
            mapDutMapYildBIN.put("MAIN_PROGRAM_NAME", "");
            mapDutMapYildBIN.put("TEST_COUNTER", "");
            mapDutMapYildBIN.put("MAIN_BIN", "Yiled");
            mapDutMapYildBIN.put("TOTAL", String.valueOf(format.format(passBinSum / (double)inputBinSum * 100)));
            mapDutMapYildBIN.put("DUT" + String.valueOf(j + 1), format.format((intDutMapPassBinTotal[j] / (double) intDutMapInputBinTotal[j]) * 100));
        }
        arrayMapDutMap.add(mapDutMapInputBIN);
        arrayMapDutMap.add(mapDutMapPassBIN);
        arrayMapDutMap.add(mapDutMapYildBIN);

        Gson gson = new Gson();
        String strJson = gson.toJson(arrayMapDutMap);

        return strJson;
    }
}
