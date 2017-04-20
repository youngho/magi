package kr.famos.bets.tdbiAnalysis.boardCompositeMap.service;

import com.google.gson.Gson;
import kr.famos.bets.tdbiAnalysis.boardCompositeMap.dto.BoardCompositeDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeMap.mapper.BoardCompositeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class BoardCompositeService {

    private static final Logger logger = LoggerFactory.getLogger(BoardCompositeService.class);

    @Autowired
    BoardCompositeMapper boardCompositeMapper;

    public List<?> retrieveBoardCompositeMap(BoardCompositeDto boardCompositeDto) {
        List<BoardCompositeDto> lstBoardCompositeDto = boardCompositeMapper.retrieveBoardCompositeMap(boardCompositeDto);
        LinkedHashMap<String, String> rowEmpty = new LinkedHashMap<>();

        int maxDut = 0;
        //가잗큰 Dut를 구한다.
        ArrayList<LinkedHashMap<String, String>> arrayMapSocketNum = new ArrayList<LinkedHashMap<String, String>>();

        for (BoardCompositeDto board : lstBoardCompositeDto) {
            String strSocketNum = board.getBiSocketNumber().replaceAll(",", "");
            String[] strBoardRow = board.getBiBoardRow().split(",");
            String[] strBoardCol = board.getBiBoardColumn().split(",");
            int maxRow = (Integer.parseInt(strBoardRow[0]) > Integer.parseInt(strBoardRow[1])) ? Integer.parseInt(strBoardRow[0]) : Integer.parseInt(strBoardRow[1]);
            int maxCol = (Integer.parseInt(strBoardCol[0]) > Integer.parseInt(strBoardCol[0])) ? Integer.parseInt(strBoardCol[0]) : Integer.parseInt(strBoardCol[0]);
            String[][] strArraySocketNum = new String[maxCol][maxRow];
            String strScoketTemp = strSocketNum;
            int col = 0;
            int row = Integer.parseInt(strBoardCol[0]);

            for (int i = 0; i < strSocketNum.length(); i = i + maxRow) {
                String strRow = strScoketTemp.substring(0, maxRow);
                strScoketTemp = strScoketTemp.substring(maxRow, strScoketTemp.length());
                LinkedHashMap<String, String> mapSocketNum = new LinkedHashMap<>();
                mapSocketNum.put("Seq", String.valueOf(board.getBiSeq()));
                mapSocketNum.put("col", String.valueOf(row));
                for (int j = 0; j < maxRow; j++) {
                    strArraySocketNum[col][j] = Character.toString(strRow.charAt(j));
                    mapSocketNum.put("row" + String.valueOf(j + 1), Character.toString(strRow.charAt(j)));
                }
                col++;
                if (Integer.parseInt(strBoardCol[0]) > (Integer.parseInt(strBoardCol[1]))) {
                    row--;
                } else {
                    row++;
                }
                arrayMapSocketNum.add(mapSocketNum);
                mapSocketNum = null;
            }
            arrayMapSocketNum.add(rowEmpty);        // for Empty Row

        }


//        Gson gson = new Gson();

//        String strJson = gson.toJson(lstBoardCompositeDto);
//        String test = "[{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa5" + "\"" + "}" + "," + "{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa2" + "\"" + "}]";
//        if (arrayMapDutMap.size() == 0) {
//            strJson = "[{" + "\"" + "a" + "\"" + ":" + "\"" + "a" + "\"" + "," +  "\"" + "3" + "\"" + ":" + "\"" + "c" + "\"" + ","  + "\"" + "2" + "\"" + ":" + "\"" + "b" + "\"" + "}]";
//        }

        return arrayMapSocketNum;
    }


}
