package kr.famos.bets.tdbiAnalysis.boardSerialMap.service;


import kr.famos.bets.tdbiAnalysis.boardSerialMap.dto.BoardSerialMapDto;
import kr.famos.bets.tdbiAnalysis.boardSerialMap.dto.BoardSerialMapResultDto;
import kr.famos.bets.tdbiAnalysis.boardSerialMap.mapper.BoardSerialMapMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class BoardSerialMapService {

    private static final Logger logger = LoggerFactory.getLogger(BoardSerialMapService.class);

    @Autowired
    BoardSerialMapMapper boardSerialMapMapper;

    /**
     * BURN_IN_BOARD_MAP에서 선택된 하나의 BI_BOARD_ID에 대해서
     * BI_SOCKET_NUMBER의 속성(BIN0~BIN16)을 가지고 각각의 BOARD_ID별 MAIN_BIN 결과 Summary
     *
     * @param boardSerialMapDto
     * @return
     */
    public List<BoardSerialMapResultDto> retrieveBoardSerialMap(BoardSerialMapDto boardSerialMapDto) {

        List<BoardSerialMapDto> boardSerialMapDtoList = boardSerialMapMapper.retrieveBoardSerialMap(boardSerialMapDto);
        List<BoardSerialMapResultDto> returnDtoList = new ArrayList<>();    // 반환형 DTO List

        //logger.debug("BI_SOCKET_NUMBER : " + boardSerialMapDtoList.get(0).getSocketNumber());

        // 리스트 개수만큼 반복
        for (BoardSerialMapDto list : boardSerialMapDtoList) {

            BoardSerialMapResultDto returnDto = new BoardSerialMapResultDto();

            //헤더 정보 셋팅
            returnDto.setPartNumber(list.getPartNumber());
            returnDto.setLotId(list.getLotId());
            returnDto.setProcessCode(list.getProcessCode());
            returnDto.setMainProgramName(list.getMainProgramName());
            returnDto.setBoardId(list.getBoardId());
            returnDto.setZoneNumber(list.getZoneNumber());
            returnDto.setSlotNumber(list.getSlotNumber());

            //소켓BIN정보 셋팅
            String strSocketNumber = list.getSocketNumber();
            strSocketNumber = strSocketNumber.replaceAll(",", "");   // BIN NUMBER가 1자리씩 들어오기 때문에 ","를 제거하고 사용
//            logger.debug("BI_SOCKET_NUMBER : " + strSocketNumber);

            // 문자열 길이만큼 반복
            for (int i = 0; i < strSocketNumber.length(); i++) {
                Character binNumber;
                binNumber = strSocketNumber.charAt(i);
                switch (binNumber) {
                    case '1':
                        returnDto.setBin1(returnDto.getBin1() + 1);
//                        Character.getNumericValue(strSocketNumber.charAt(i));
//                        logger.debug("BIN1 : " + binNumber);
                        break;
                    case '2':
//                        logger.debug("BIN2 : " + binNumber);
                        returnDto.setBin2(returnDto.getBin2() + 1);
                        break;
                    case '3':
//                        logger.debug("BIN3 : " + binNumber);
                        returnDto.setBin3(returnDto.getBin3() + 1);
                        break;
                    case '4':
//                        logger.debug("BIN4 : " + binNumber);
                        returnDto.setBin4(returnDto.getBin4() + 1);
                        break;
                    case '5':
//                        logger.debug("BIN5 : " + binNumber);
                        returnDto.setBin5(returnDto.getBin5() + 1);
                        break;
                    case '6':
//                        logger.debug("BIN6 : " + binNumber);
                        returnDto.setBin6(returnDto.getBin6() + 1);
                        break;
                    case '7':
//                        logger.debug("BIN7 : " + binNumber);
                        returnDto.setBin7(returnDto.getBin7() + 1);
                        break;
                    case '8':
//                        logger.debug("BIN8 : " + binNumber);
                        returnDto.setBin8(returnDto.getBin8() + 1);
                        break;
                    case '9':
//                        logger.debug("BIN9 : " + binNumber);
                        returnDto.setBin9(returnDto.getBin9() + 1);
                        break;
                    case 'A':
//                        logger.debug("BIN10 : " + binNumber);
                        returnDto.setBin10(returnDto.getBin10() + 1);
                        break;
                    case 'B':
//                        logger.debug("BIN11 : " + binNumber);
                        returnDto.setBin11(returnDto.getBin11() + 1);
                        break;
                    case 'C':
//                        logger.debug("BIN12 : " + binNumber);
                        returnDto.setBin12(returnDto.getBin12() + 1);
                        break;
                    case 'D':
//                        logger.debug("BIN13 : " + binNumber);
                        returnDto.setBin13(returnDto.getBin13() + 1);
                        break;
                    case 'E':
//                        logger.debug("BIN14 : " + binNumber);
                        returnDto.setBin14(returnDto.getBin14() + 1);
                        break;
                    case 'F':
//                        logger.debug("BIN15 : " + binNumber);
                        returnDto.setBin15(returnDto.getBin15() + 1);
                        break;
                    case '0':
//                        logger.debug("BIN0 : " + binNumber);
                        returnDto.setBin0(returnDto.getBin0() + 1);
                        break;
                }
            }// End for // 문자열 길이만큼 반복

            // INPUT 계산값 셋팅
            returnDto.setInput(returnDto.getBin0()
                    + returnDto.getBin1()
                    + returnDto.getBin2()
                    + returnDto.getBin3()
                    + returnDto.getBin4()
                    + returnDto.getBin5()
                    + returnDto.getBin6()
                    + returnDto.getBin7()
                    + returnDto.getBin8()
                    + returnDto.getBin9()
                    + returnDto.getBin10()
                    + returnDto.getBin11()
                    + returnDto.getBin12()
                    + returnDto.getBin13()
                    + returnDto.getBin14()
                    + returnDto.getBin15()
            );
            // PASS 계산값 셋팅
            returnDto.setPass(returnDto.getInput());
//            TODO

            // YIELD 계산값 셋팅
            returnDto.setYield(returnDto.getInput());
//            TODO

            returnDtoList.add(returnDto);
        }// End for // 리스트 개수만큼 반복

        return returnDtoList;
    }
}