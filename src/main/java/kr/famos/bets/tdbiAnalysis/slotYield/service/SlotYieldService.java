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
 * Created by yhkim on 2017-03-13.
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
                mapBoardMap.put("BOARD_TYPE", String.valueOf(board.getBoardId()).substring(0,3));
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
