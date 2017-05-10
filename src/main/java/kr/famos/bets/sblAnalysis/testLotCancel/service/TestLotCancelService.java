package kr.famos.bets.sblAnalysis.testLotCancel.service;

import com.google.gson.Gson;
import kr.famos.bets.sblAnalysis.testLotCancel.dto.TestLotCancelDto;
import kr.famos.bets.sblAnalysis.testLotCancel.mapper.TestLotCancelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class TestLotCancelService {

    @Autowired
    TestLotCancelMapper testLotCancelMapper;

    public String retrieveTestLotCancel(TestLotCancelDto testLotCancelDto) {
        //NB_BIN과 같음
        List<TestLotCancelDto> lstSingleDutMapDto = testLotCancelMapper.retrieveTestLotCancel(testLotCancelDto);
        Map<Integer, String> mapDutMap = new TreeMap<>();
        Integer maxBin = 0;
        for (TestLotCancelDto dut : lstSingleDutMapDto) {
            String strBin = dut.getDutMainBin().replaceAll(",", "");
            if (maxBin < strBin.length()) {
                maxBin = strBin.length();
            }
        }

        List<Map<String, TestLotCancelDto>> mapSingleDutMapDto = testLotCancelMapper.retrieveTestLotCancelMap(testLotCancelDto);
        List arraySingleDutMapDto = new ArrayList();

        for (Map<String, TestLotCancelDto> map : mapSingleDutMapDto) {
            Map<String, String> mapSingleDutMapDtoRow = new LinkedHashMap<String, String>();
            for (Map.Entry<String, TestLotCancelDto> entry : map.entrySet()) {
                String key = entry.getKey();
                String value = String.valueOf(entry.getValue());
                if (key.equals("DUT_MAIN_BIN")) {

                    String strBin = value.replaceAll(",", "");
                    for (int i = 0; i < strBin.length(); i++) {
                        mapSingleDutMapDtoRow.put("DUT" + Integer.toString(i + 1), Character.toString(strBin.charAt(i)));
                    }
                    for (int i = strBin.length(); maxBin > i; i++) {
                        mapSingleDutMapDtoRow.put("DUT" + Integer.toString(i + 1), "0");
                    }

                } else {
                    mapSingleDutMapDtoRow.put(key, value);
                }

            }
            arraySingleDutMapDto.add(mapSingleDutMapDtoRow);
            mapSingleDutMapDtoRow = null;
        }

        Gson gson = new Gson();

        String strJson = gson.toJson(arraySingleDutMapDto);
//        String test = "[{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa5" + "\"" + "}" + "," + "{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa2" + "\"" + "}]";
        if (arraySingleDutMapDto.size() == 0) {
            strJson = "[{" + "\"" + "Message" + "\"" + ":" + "\"" + "No data available in table" + "\"" + "}]";
        }


        return strJson;
    }
}
