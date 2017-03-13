package kr.famos.bets.dutmap.singledut.service;

import com.google.gson.Gson;
import kr.famos.bets.dutmap.singledut.dto.SingleDutMapDto;
import kr.famos.bets.dutmap.singledut.mapper.SingleDutMapMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by yhkim on 2017-03-09.
 */
@Service
public class SingleDutMapService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    SingleDutMapMapper singleDutMapMapper;


    public String retrieveSingleDutMap(SingleDutMapDto singleDutMapDto) {

        //NB_BIN과 같음
        List<SingleDutMapDto> lstSingleDutMapDto = singleDutMapMapper.retrieveSingleDutMap(singleDutMapDto);
        Map<Integer, String> mapDutMap = new TreeMap<>();
        Integer maxBin = 0;
        for (SingleDutMapDto dut : lstSingleDutMapDto) {
            String strBin = dut.getDutMainBin().replaceAll(",", "");
            if (maxBin < strBin.length()) {
                maxBin = strBin.length();
            }
        }

        List<Map<String, SingleDutMapDto>> mapSingleDutMapDto = singleDutMapMapper.retrieveSingleDutMapMap(singleDutMapDto);
        List arraySingleDutMapDto = new ArrayList();

        for (Map<String, SingleDutMapDto> map : mapSingleDutMapDto) {
            Map<String, String> mapSingleDutMapDtoRow = new LinkedHashMap<String, String>();
            for (Map.Entry<String, SingleDutMapDto> entry : map.entrySet()) {
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
            strJson = "[{" + "\"" + "Message" + "\"" + ":" + "\"" + "no data" + "\"" + "}]";
        }


        return strJson;
    }
}
