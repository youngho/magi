package kr.famos.bets.tdbiAnalysis.boardCompositeMap.service;

import kr.famos.bets.tdbiAnalysis.boardCompositeMap.dto.BoardCompositeDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeMap.mapper.BoardCompositeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Service
public class BoardCompositeService {

    private static final Logger logger = LoggerFactory.getLogger(BoardCompositeService.class);

    @Autowired
    BoardCompositeMapper boardCompositeMapper;

    public List<?> retrieveBoardCompositeMap(BoardCompositeDto boardCompositeDto) {
        List<BoardCompositeDto> lstBoardCompositeDto = boardCompositeMapper.retrieveBoardCompositeMap(boardCompositeDto);
        LinkedHashMap<String, String> rowEmpty = new LinkedHashMap<>();
        int boardlistCount = 0;

        int maxDut = 0;
        //가잗큰 Dut를 구한다.
        ArrayList<LinkedHashMap<String, String>> arrayMapSocketNum = new ArrayList<LinkedHashMap<String, String>>();

        for (BoardCompositeDto board : lstBoardCompositeDto) {
            String strSocketNum = board.getBiSocketNumber().replaceAll(",", "");
            String[] strBoardRow = board.getBiBoardRow().split(",");
            String[] strBoardCol = board.getBiBoardColumn().split(",");
            int maxRow = (Integer.parseInt(strBoardRow[0]) > Integer.parseInt(strBoardRow[1])) ? Integer.parseInt(strBoardRow[0]) : Integer.parseInt(strBoardRow[1]);
            int maxCol = (Integer.parseInt(strBoardCol[0]) > Integer.parseInt(strBoardCol[0])) ? Integer.parseInt(strBoardCol[0]) : Integer.parseInt(strBoardCol[0]);
//            String[][] strArraySocketNum = new String[maxCol][maxRow];
            String strScoketTemp = strSocketNum;
            int col = 0;
            int row = Integer.parseInt(strBoardCol[0]);

            for (int i = 0; i < strSocketNum.length(); i = i + maxRow) {
                String strRow = strScoketTemp.substring(0, maxRow);
                strScoketTemp = strScoketTemp.substring(maxRow, strScoketTemp.length());
                LinkedHashMap<String, String> mapSocketNum = new LinkedHashMap<>();
                //mapSocketNum.put("Seq", String.valueOf(board.getBiSeq()));
                mapSocketNum.put("partNumber", String.valueOf(board.getBiPartNumber()));
                mapSocketNum.put("processCode", String.valueOf(board.getBiProcessCode()));
                mapSocketNum.put("testerNumber", String.valueOf(board.getBiTestNumber()));
                mapSocketNum.put("lotId", String.valueOf(board.getBiLotId()));
                mapSocketNum.put("zoneNumber", String.valueOf(board.getBiZoneNumber()));
                mapSocketNum.put("boardId", String.valueOf(board.getBiBoardId()));
                mapSocketNum.put(".", "Col" + String.valueOf(row));
                for (int j = 0; j < maxRow; j++) {
//                    strArraySocketNum[col][j] = Character.toString(strRow.charAt(j));
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
            if (boardlistCount < lstBoardCompositeDto.size() - 1 ) {    // 보드가 모두 출력된후 추가하지 않기 위한 if문
                arrayMapSocketNum.add(rowEmpty);        // for Empty Row
                // Start for Board Header Info Each Board Map
                LinkedHashMap<String, String> boardHeaderInfo = new LinkedHashMap<>();
                boardHeaderInfo.put("partNumber", "Part Number");
                boardHeaderInfo.put("processCode", "Process Code");
                boardHeaderInfo.put("testNumber", "Test Number");
                boardHeaderInfo.put("lotId", "Lot Id");
                boardHeaderInfo.put("zoneNumber", "Zone Number");
                boardHeaderInfo.put("boardId", "Board Id");
                boardHeaderInfo.put("col", "Col");
                for (int j = 0; j < maxRow; j++) {
                    boardHeaderInfo.put("row" + String.valueOf(j + 1), "Row" + String.valueOf(j + 1));
                }
                arrayMapSocketNum.add(boardHeaderInfo);
                // End for Board Header Info Each Board Map
            }
            boardlistCount += 1;
        }
        return arrayMapSocketNum;
    }
}