package kr.famos.bets.tdbiAnalysis.boardYield.service;


import com.google.gson.Gson;
import kr.famos.bets.dutmap.compodut.dto.CompoDutMapDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeMap.dto.BoardCompositeDto;
import kr.famos.bets.tdbiAnalysis.boardYield.dto.BoardYieldDto;
import kr.famos.bets.tdbiAnalysis.boardYield.mapper.BoardYieldMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.CharacterIterator;
import java.text.DecimalFormat;
import java.util.*;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class BoardYieldService {

    private static final Logger logger = LoggerFactory.getLogger(BoardYieldService.class);

    @Autowired
    BoardYieldMapper boardYieldMapper;

    public List<?> retrieveBoardYield(BoardYieldDto boardYieldDto) {
        boardYieldMapper.retrieveBoardYield(boardYieldDto);
        List<BoardYieldDto> lstBoardYieldDto = boardYieldMapper.retrieveBoardYield(boardYieldDto);

        ArrayList<LinkedHashMap<String, String>> arrayMapSocketNum = new ArrayList<LinkedHashMap<String, String>>();

        for (BoardYieldDto board : lstBoardYieldDto) {
            String strSocketNum = board.getSocketNumber().replaceAll(",", "");

            int intBoardMapInputBinTotal;
            int intBoardMapPassBinTotal;

            Map<String, String> mapBoardMapTotal = new TreeMap<>();
            LinkedHashMap<String, String> mapBoardMap = new LinkedHashMap<>();
            mapBoardMap.put("BOARD_ID", String.valueOf(board.getBoardId()));
            mapBoardMap.put("INPUT", "0");
            mapBoardMap.put("PASS", "0");
            for (int k = 0; k <= 9; k++) {
                mapBoardMap.put("S_"+String.valueOf(k), "0");
            }
            mapBoardMap.put("S_A", "0");
            mapBoardMap.put("S_B", "0");
            mapBoardMap.put("S_C", "0");
            mapBoardMap.put("S_D", "0");
            mapBoardMap.put("S_E", "0");
            mapBoardMap.put("S_F", "0");
            mapBoardMap.put("S_G", "0");

            intBoardMapInputBinTotal = 0;
            intBoardMapPassBinTotal = 0;
            for (int i = 0; i < strSocketNum.length(); i++) {
                if (Character.toString(strSocketNum.charAt(i)) != "X" && Character.toString(strSocketNum.charAt(i)) != "." && mapBoardMap.containsKey("S_"+ Character.toString(strSocketNum.charAt(i)))) {
                    mapBoardMap.put("S_"+Character.toString(strSocketNum.charAt(i)), String.valueOf(Integer.parseInt(mapBoardMap.get("S_"+Character.toString(strSocketNum.charAt(i))))+ 1));
                    //Total
                    intBoardMapInputBinTotal++;
                    if (Character.toString(strSocketNum.charAt(i)).equals("1")) {
                        intBoardMapPassBinTotal++;
                    }

                }
            }
            mapBoardMap.put("INPUT", String.valueOf(intBoardMapInputBinTotal));
            mapBoardMap.put("PASS", String.valueOf(intBoardMapPassBinTotal));
            arrayMapSocketNum.add(mapBoardMap);
            mapBoardMap=null;
        }
//        //DUT_MAIN_BIN�� �迭�� �ִ´�.
//        int[][] intDutMap = new int[maxDut][lstCompoDutMapDto.size()];
//        int index = 0;
//        for (CompoDutMapDto dut : lstCompoDutMapDto) {
//            String strDut = dut.getDutMainBin().replaceAll(",", "");
//            for (Integer i = 0; i < strDut.length(); i++) {
//                if (!Character.toString(strDut.charAt(i)).equals("A")) {
//                    intDutMap[i][index] = Character.getNumericValue(strDut.charAt(i));
//                }
//            }
//            index++;
//        }
//
//
//
//        //����� ġȯ�Ͽ� Map�� ?�� �ٽ� List�� �߰� �ϴ�.
//        List<LinkedHashMap<String, String>> arrayMapDutMap = new ArrayList<>();
//        for (Integer i = 0; i < 8; i++) {
//            LinkedHashMap<String, String> mapDutMap = new LinkedHashMap<>();
//            //���� �� ��ȣ�� �ִ´�.
//            mapDutMap.put( "MAIN_BIN",String.valueOf(i+1));
//            mapDutMap.put( "TOTAL",String.valueOf(mapDutMapTotal.get(i+1)));
//            for (int j = 0; j < maxDut; j++) {
//                mapDutMap.put( "DUT"+String.valueOf(j+1),String.valueOf(intDutMap2[i][j]));
//            }
//            arrayMapDutMap.add(mapDutMap);
//            mapDutMap=null;
//        }
//
//        //input �� Pass bin �����߰�
//        LinkedHashMap<String, String> mapDutMapInputBIN = new LinkedHashMap<>();
//        LinkedHashMap<String, String> mapDutMapPassBIN = new LinkedHashMap<>();
//        LinkedHashMap<String, String> mapDutMapYildBIN = new LinkedHashMap<>();
//        DecimalFormat format = new DecimalFormat(".##");
//
//        for (int j = 0; j < maxDut; j++) {
//            mapDutMapInputBIN.put( "PART_NUMBER","");
//            mapDutMapInputBIN.put( "LOT_ID","");
//            mapDutMapInputBIN.put( "PROCESS_CODE","");
//            mapDutMapInputBIN.put( "BOARD_ID","");
//            mapDutMapInputBIN.put( "TESTER_NUMBER","");
//            mapDutMapInputBIN.put( "HEAD","");
//            mapDutMapInputBIN.put( "MAIN_PROGRAM_NAME","");
//            mapDutMapInputBIN.put( "TEST_COUNTER","");
//            mapDutMapInputBIN.put( "MAIN_BIN","InputBin");
//            mapDutMapInputBIN.put( "TOTAL","");
//            mapDutMapInputBIN.put( "DUT"+String.valueOf(j+1),String.valueOf(intDutMapInputBinTotal[j]));
//
//            mapDutMapPassBIN.put( "PART_NUMBER","");
//            mapDutMapPassBIN.put( "LOT_ID","");
//            mapDutMapPassBIN.put( "PROCESS_CODE","");
//            mapDutMapPassBIN.put( "BOARD_ID","");
//            mapDutMapPassBIN.put( "TESTER_NUMBER","");
//            mapDutMapPassBIN.put( "HEAD","");
//            mapDutMapPassBIN.put( "MAIN_PROGRAM_NAME","");
//            mapDutMapPassBIN.put( "TEST_COUNTER","");
//            mapDutMapPassBIN.put( "MAIN_BIN","PassBin");
//            mapDutMapPassBIN.put( "TOTAL","");
//            mapDutMapPassBIN.put( "DUT"+String.valueOf(j+1),String.valueOf(intDutMapPassBinTotal[j]));
//
//            mapDutMapYildBIN.put( "PART_NUMBER","");
//            mapDutMapYildBIN.put( "LOT_ID","");
//            mapDutMapYildBIN.put( "PROCESS_CODE","");
//            mapDutMapYildBIN.put( "BOARD_ID","");
//            mapDutMapYildBIN.put( "TESTER_NUMBER","");
//            mapDutMapYildBIN.put( "HEAD","");
//            mapDutMapYildBIN.put( "MAIN_PROGRAM_NAME","");
//            mapDutMapYildBIN.put( "TEST_COUNTER","");
//            mapDutMapYildBIN.put( "MAIN_BIN","Yiled");
//            mapDutMapYildBIN.put( "TOTAL","");
//            mapDutMapYildBIN.put("DUT"+ String.valueOf(j+1),format.format((intDutMapPassBinTotal[j]/(double)intDutMapInputBinTotal[j])*100));
//        }
//        arrayMapDutMap.add(mapDutMapInputBIN);
//        arrayMapDutMap.add(mapDutMapPassBIN);
//        arrayMapDutMap.add(mapDutMapYildBIN);
            Gson gson = new Gson();

            String strJson = gson.toJson(arrayMapSocketNum);
//        String test = "[{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa5" + "\"" + "}" + "," + "{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa2" + "\"" + "}]";
//        if (arrayMapDutMap.size() == 0) {
//            strJson = "[{" + "\"" + "a" + "\"" + ":" + "\"" + "a" + "\"" + "," +  "\"" + "3" + "\"" + ":" + "\"" + "c" + "\"" + ","  + "\"" + "2" + "\"" + ":" + "\"" + "b" + "\"" + "}]";
//        }
            return arrayMapSocketNum;
        }


    }
