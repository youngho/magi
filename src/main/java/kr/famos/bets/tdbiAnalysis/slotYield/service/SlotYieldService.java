package kr.famos.bets.tdbiAnalysis.slotYield.service;

import com.google.gson.Gson;
import kr.famos.bets.tdbiAnalysis.slotYield.dto.SlotYieldDto;
import kr.famos.bets.tdbiAnalysis.slotYield.mapper.SlotYieldMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

/**
 * 1. File name     : slotYield.component.ts
 * 2. Discription   : BURN_IN_BOARD_MAP 테이블에서 Slot 별로 BIN의 결과를 보여준다
 *                    BI_SOCKET_NUMBER 컬럼에 들어 있는 BIN 문자열을 파싱하여 BIN별로 형태로 보여주는것이 핵심이다
 * 3. writer        : yhkim     2017.03.01
 * 4. modifier      :
 * 5. UI Id         : BETS-UI-0504 : slotYield
 */
/**
 * version 1.0 : 2017.03.01  /  yhkim  / First Frame Creation
 */
@Service
public class SlotYieldService {

    private static final Logger logger = LoggerFactory.getLogger(SlotYieldService.class);

    @Autowired
    SlotYieldMapper slotYieldMapper;

    public List<?> retrieveSlotYield(SlotYieldDto slotYieldDto) {
        List<SlotYieldDto> lstSlotYieldDto = slotYieldMapper.retrieveSlotYield(slotYieldDto);

        ArrayList<LinkedHashMap<String, String>> arrayMapSocketNum = new ArrayList<LinkedHashMap<String, String>>();
        String strBoardIdTemp = "";
        LinkedHashMap<String, String> mapBoardMap = new LinkedHashMap<>();
        int intBoardMapInputBinTotal = 0;
        int intBoardMapPassBinTotal = 0;
        DecimalFormat format = new DecimalFormat(".##");
        for (SlotYieldDto board : lstSlotYieldDto) {
            String strSocketNum = board.getSocketNumber().replaceAll(",", "");
            if (!strBoardIdTemp.equals(String.valueOf(board.getSlotNumber()))) {
                if (!strBoardIdTemp.equals("")) {
                    arrayMapSocketNum.add(mapBoardMap);
                    mapBoardMap = null;
                    mapBoardMap = new LinkedHashMap<>();
                }

                strBoardIdTemp = String.valueOf(board.getSlotNumber());
                mapBoardMap.put("PART_NUMBER", String.valueOf(board.getPartNumber()));
                mapBoardMap.put("PROCESS_CODE", String.valueOf(board.getProcessCode()));
                mapBoardMap.put("BOARD_TYPE", String.valueOf(board.getBoardId()).substring(0,4));
                mapBoardMap.put("TESTER_MODEL", String.valueOf(board.getTesterModel()));
                mapBoardMap.put("TESTER_NUMBER", String.valueOf(board.getTestNumber()));
                mapBoardMap.put("SLOT_NUMBER", String.valueOf(board.getSlotNumber()));
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

        }
        if (mapBoardMap != null) {
            arrayMapSocketNum.add(mapBoardMap);
            mapBoardMap = null;
        }
        return arrayMapSocketNum;
    }
}