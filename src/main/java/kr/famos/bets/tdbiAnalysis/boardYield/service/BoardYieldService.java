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

        List<BoardYieldDto> lstBoardYieldDto = boardYieldMapper.retrieveBoardYield(boardYieldDto);

        ArrayList<LinkedHashMap<String, String>> arrayMapSocketNum = new ArrayList<LinkedHashMap<String, String>>();
        String strBoardIdTemp = "";
        LinkedHashMap<String, String> mapBoardMap = new LinkedHashMap<>();
        int intBoardMapInputBinTotal = 0;
        int intBoardMapPassBinTotal = 0;
        DecimalFormat format = new DecimalFormat(".##");
        for (BoardYieldDto board : lstBoardYieldDto) {
            String strSocketNum = board.getSocketNumber().replaceAll(",", "");
            if (!strBoardIdTemp.equals(String.valueOf(board.getBoardId()))) {
                if (!strBoardIdTemp.equals("")) {
                    arrayMapSocketNum.add(mapBoardMap);
                    mapBoardMap = null;
                    mapBoardMap = new LinkedHashMap<>();
                }
                strBoardIdTemp = String.valueOf(board.getBoardId());
                mapBoardMap.put("BOARD_ID", String.valueOf(board.getBoardId()));
                mapBoardMap.put("INPUT", "0");
                mapBoardMap.put("PASS", "0");
                mapBoardMap.put("YIELD", "0");
                for (int k = 0; k <= 9; k++) {
                    mapBoardMap.put("BIN" + String.valueOf(k), "0");
                }
                mapBoardMap.put("BINA", "0");
                mapBoardMap.put("BINB", "0");
                mapBoardMap.put("BINC", "0");
                mapBoardMap.put("BIND", "0");
                mapBoardMap.put("BINE", "0");
                mapBoardMap.put("BINF", "0");
                mapBoardMap.put("BING", "0");

                intBoardMapInputBinTotal = 0;
                intBoardMapPassBinTotal = 0;
            }
            for (int i = 0; i < strSocketNum.length(); i++) {
                if (Character.toString(strSocketNum.charAt(i)) != "X" && Character.toString(strSocketNum.charAt(i)) != "." && mapBoardMap.containsKey("BIN" + Character.toString(strSocketNum.charAt(i)))) {
                    mapBoardMap.put("BIN" + Character.toString(strSocketNum.charAt(i)), String.valueOf(Integer.parseInt(mapBoardMap.get("BIN" + Character.toString(strSocketNum.charAt(i)))) + 1));
                    //Total
                    intBoardMapInputBinTotal++;
                    if (Character.toString(strSocketNum.charAt(i)).equals("1")) {
                        intBoardMapPassBinTotal++;
                    }

                }
            }
            mapBoardMap.put("INPUT", String.valueOf(intBoardMapInputBinTotal));
            mapBoardMap.put("PASS", String.valueOf(intBoardMapPassBinTotal));
            mapBoardMap.put("YIELD", String.valueOf(format.format((intBoardMapPassBinTotal/(double)intBoardMapInputBinTotal)*100)));

//            mapBoardMap=null;
        }
        if (mapBoardMap != null) {
            arrayMapSocketNum.add(mapBoardMap);
            mapBoardMap = null;
        }


        Gson gson = new Gson();

        String strJson = gson.toJson(arrayMapSocketNum);
//        String test = "[{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa5" + "\"" + "}" + "," + "{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa2" + "\"" + "}]";
//        if (arrayMapDutMap.size() == 0) {
//            strJson = "[{" + "\"" + "a" + "\"" + ":" + "\"" + "a" + "\"" + "," +  "\"" + "3" + "\"" + ":" + "\"" + "c" + "\"" + ","  + "\"" + "2" + "\"" + ":" + "\"" + "b" + "\"" + "}]";
//        }
        return arrayMapSocketNum;
    }


}
