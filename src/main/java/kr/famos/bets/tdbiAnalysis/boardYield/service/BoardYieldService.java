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
                mapBoardMap.put("partNumber", String.valueOf(board.getPartNumber()));
                mapBoardMap.put("processCode", String.valueOf(board.getProcessCode()));
                mapBoardMap.put("boardType", String.valueOf(board.getBoardId()).substring(0,4));
                mapBoardMap.put("testerModel", String.valueOf(board.getTesterModel()));
                mapBoardMap.put("testerNumber", String.valueOf(board.getTestNumber()));
                mapBoardMap.put("boardId", String.valueOf(board.getBoardId()));
                mapBoardMap.put("input", "0");
                mapBoardMap.put("pass", "0");
                mapBoardMap.put("yield", "0");
                for (int k = 0; k <= 9; k++) {
                    mapBoardMap.put("bin" + String.valueOf(k), "0");
                }
                mapBoardMap.put("binA", "0");
                mapBoardMap.put("binB", "0");
                mapBoardMap.put("binC", "0");
                mapBoardMap.put("binD", "0");
                mapBoardMap.put("binE", "0");
                mapBoardMap.put("binF", "0");
                mapBoardMap.put("binG", "0");

                intBoardMapInputBinTotal = 0;
                intBoardMapPassBinTotal = 0;
            }
            for (int i = 0; i < strSocketNum.length(); i++) {
                if (Character.toString(strSocketNum.charAt(i)) != "X" && Character.toString(strSocketNum.charAt(i)) != "." && mapBoardMap.containsKey("bin" + Character.toString(strSocketNum.charAt(i)))) {
                    mapBoardMap.put("bin" + Character.toString(strSocketNum.charAt(i)), String.valueOf(Integer.parseInt(mapBoardMap.get("bin" + Character.toString(strSocketNum.charAt(i)))) + 1));
                    //Total
                    intBoardMapInputBinTotal++;
                    if (Character.toString(strSocketNum.charAt(i)).equals("1")) {
                        intBoardMapPassBinTotal++;
                    }
                }
            }
            mapBoardMap.put("input", String.valueOf(intBoardMapInputBinTotal));
            mapBoardMap.put("pass", String.valueOf(intBoardMapPassBinTotal));
            mapBoardMap.put("yield", String.valueOf(format.format((intBoardMapPassBinTotal/(double)intBoardMapInputBinTotal)*100)));
        }

        if (mapBoardMap.size() > 0) {
            arrayMapSocketNum.add(mapBoardMap);
        }
        return arrayMapSocketNum;
    }

}
