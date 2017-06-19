package kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.service;

import kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.dto.BoardCompositeSocketYieldCondDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.dto.BoardCompositeSocketYieldResultDto;
import kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.mapper.BoardCompositeSocketYieldMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

/**
 * BETS-UI-0507 : BoardCompositeSocketYield
 * 단일 보드의 소켓별 수율을 보드 형태로 보여준다.
 */
@Service
public class BoardCompositeSocketYieldService {

    private static final Logger logger = LoggerFactory.getLogger(BoardCompositeSocketYieldService.class);

    @Autowired
    BoardCompositeSocketYieldMapper boardCompositeSocketYieldMapper;

    /**
     * @param boardCompositeSocketYieldCondDto
     * @return List<BoardCompositeSocketYieldResultDto>
     * 보드의 소켓별 수율을 조회 하는 기능
     * 조회 기간동안 같은 boardId에 따라 여러 행이 반환될 수 있다.
     * 리스트의 데이터를 소켓별로 분류하고
     * 다음 리스트를 조회하여 같으면
     * 이전 소켓데이터에 누적하여 기록하고,
     * 다를경우 이전 데이터를 저장한다.
     */
    public List<?> retrieveBoardCompositeSocketYield(BoardCompositeSocketYieldCondDto boardCompositeSocketYieldCondDto) {

        // 리턴용 DTO, Map을 ArrayList로 만들었다
        ArrayList<LinkedHashMap<String, String>> returnDto = new ArrayList<LinkedHashMap<String, String>>();

        // DB 조회를 통한 'resultDtos'는 다른 boardId가 한번에 조회 될 수 있다. UI에서 BoardId를 필수로 잡지 않으면 같은 보드끼리만 수율을 계산하여야 한다
        List<BoardCompositeSocketYieldResultDto> resultDtos = boardCompositeSocketYieldMapper.retrieveBoardCompositeSocketYield(boardCompositeSocketYieldCondDto);

        // 조회 목록이 있을 경우만 해당 로직을 실행한다
        if (resultDtos.size() > 0) {


//        BoardCompositeSocketYieldResultDto lastBoard = new BoardCompositeSocketYieldResultDto();    // 같은 보드인지를 알아내기 위한 변수
            resultDtos.get(0).setStrSocketNumber(resultDtos.get(0).getBiSocketNumber().replaceAll(",", ""));

            //각 소켓의 BIN을 관리하기 위한 2차원 배열을 생성한다
            int[][] socketArr = new int[resultDtos.get(0).getStrSocketNumber().length()][8];
            int[] socketCount = new int[resultDtos.get(0).getStrSocketNumber().length() + 1];
            String[] socketYield = new String[resultDtos.get(0).getStrSocketNumber().length() + 1];

            resultDtos.get(0).setStrSocketNumber(resultDtos.get(0).getStrSocketNumber().replace(",", ""));

            String[] strBoardRow = resultDtos.get(0).getBiBoardRow().split(",");        // RAW 파일의 첫출에 표시된 보드 좌표의 시작과 끝을 담고 있다
            String[] strBoardCol = resultDtos.get(0).getBiBoardColumn().split(",");     // RAW 파일의 줄마다 표시된 보드 좌표의 시작과 끝
            // 좌표가 역순으로 들어 있을 수 있기 때문에 루프를 돌리기 위한 큰 큰값을 구한다
//            int maxRow = ();
//            int maxCol = (Integer.parseInt(strBoardCol[0]) > Integer.parseInt(strBoardCol[1])) ? Integer.parseInt(strBoardCol[0]) : Integer.parseInt(strBoardCol[1]);
            resultDtos.get(0).setRowMax((Integer.parseInt(strBoardRow[0]) > Integer.parseInt(strBoardRow[1])) ? Integer.parseInt(strBoardRow[0]) : Integer.parseInt(strBoardRow[1]));
            resultDtos.get(0).setColMax((Integer.parseInt(strBoardCol[0]) > Integer.parseInt(strBoardCol[1])) ? Integer.parseInt(strBoardCol[0]) : Integer.parseInt(strBoardCol[1]));

            // Start of 조회된 목록 루프
            for (BoardCompositeSocketYieldResultDto list : resultDtos) {
//            logger.debug("retrieveBoardCompositeSocketYield");

//            lastBoard.setBiBoardId(list.getBiBoardId());
//            lastBoard.setBiBoardColumn(list.getBiBoardColumn());
//            lastBoard.setBiBoardRow(list.getBiBoardRow());
//            lastBoard.setBiSocketNumber(list.getStrSocketNumber());
                //BIN결과가 ','로 구분되어 소켓 수 만큼 1자씩 들어 있다
//            lastBoard.setStrSocketNumber(list.getStrSocketNumber().replace(",", ""));


//            String strSocketNum = list.getBiSocketNumber().replaceAll(",", "");
                list.setStrSocketNumber(list.getBiSocketNumber().replaceAll(",", ""));

                // 기존 socketArr 의 값을 각 소켓에 대해 누적한다
                for (int i = 0; i < list.getStrSocketNumber().length(); i++) {
//                logger.debug("리스트길이 : " + String.valueOf(list.getStrSocketNumber().length()));
                    Character binNumber;
                    binNumber = list.getStrSocketNumber().charAt(i);
                    socketCount[i + 1] += 1;
                    switch (binNumber) {
                        case '1':
                            socketArr[i][0] += 1;   //  BIN 1 일경우 [i][0] 에 넣는다
                            break;
                        case '2':
                            socketArr[i][1] += 1;
                            break;
                        case '3':
                            socketArr[i][2] += 1;
                            break;
                        case '4':
                            socketArr[i][3] += 1;
                            break;
                        case '5':
                            socketArr[i][4] += 1;
                            break;
                        case '6':
                            socketArr[i][5] += 1;
                            break;
                        case '7':
                            socketArr[i][6] += 1;
                            break;
                        case '8':
                            socketArr[i][7] += 1;
                            break;
                    }
                    socketYield[i + 1] = String.format("%.2f", ((float) socketArr[i][0] / (float) socketCount[i + 1]) * 100);  // BIN 1일 경우로 계산한다
                }


//            String[][] strArraySocketNum = new String[list.getColMax()][list.getRowMax()];
//            String strScoketTemp = list.getStrSocketNumber();
//            int row = list.getColStart();

                // 1행씩 추가한다
/*
            LinkedHashMap<String, String> retrunMap = new LinkedHashMap<>();
            for (int i = 0; i < list.getStrSocketNumber().length(); i = i + list.getRowMax()) {
                logger.debug("소켓 길이만큼 루프");
                String strRow = strScoketTemp.substring(0, list.getRowMax());
                strScoketTemp = strScoketTemp.substring(list.getRowMax(), strScoketTemp.length());

//                mapSocketNum.put("boardId", board.getBiBoardId());
                retrunMap.put(list.getBiBoardId(), "Col" + String.valueOf(row));
                for (int j = 0; j < list.getRowMax(); j++) {
//                    strArraySocketNum[col][j] = Character.toString(strRow.charAt(j));
                    retrunMap.put("row" + String.valueOf(j + 1), Character.toString(strRow.charAt(j)));
                }
            }
            returnDto.add(retrunMap);
*/
            }// End of 조회된 목록 루프

//        retrunMap.put("boardId", resultDtos.get(0).getBiBoardId());
            // Col정보를 각 ROW마자 표시한다. 크기가 큰 순서에서 작은 순서로 되어 있다
            for (int i = 1; i <= resultDtos.get(0).getColMax(); i++) {
                LinkedHashMap<String, String> retrunMap = new LinkedHashMap<>();
                retrunMap.put(resultDtos.get(0).getBiBoardId(), "Col" + String.valueOf(13 - i));


                for (int j = 1; j <= resultDtos.get(0).getRowMax(); j++) {
                    //retrunMap.put("row" + String.valueOf(j), String.valueOf(socketYield[i * j]) + "(" + String.valueOf(socketCount[i * j]) + ")");  // 각 수율을 계산한 소켓 데이터의 총 개수를 보여주는 부분이다. 하지만 색깔을 보여주는 부분과 충돌하여 변경아래로 변경함
                    retrunMap.put("row" + String.valueOf(j), String.valueOf(socketYield[i * j]));
                    //logger.debug("소켓 개수만큼 반복되어야 맞음");
                }
                returnDto.add(retrunMap);
            }
        }// End of 조회 목록이 있을 경우만 해당 로직을 실행한다
        return returnDto;
    }
}