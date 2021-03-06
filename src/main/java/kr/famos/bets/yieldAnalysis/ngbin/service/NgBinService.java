package kr.famos.bets.yieldAnalysis.ngbin.service;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinCondDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import kr.famos.bets.yieldAnalysis.ngbin.mapper.NgBinMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class NgBinService {
    private static final Logger logger = LoggerFactory.getLogger(NgBinService.class);

    @Autowired
    NgBinMapper ngBinMapper;

    public List<?> retrieveNgBinMap(NgBinCondDto ngBinCondDto) {

        //표현해야 할 NG_BIN리스트를 만들기 위해 NG_BIN_DTO를 LIST로가 져옴, MAP으로 가져오면 특정 필드를 꺼내오기 힘듬
        List<NgBinResultDto> lstNgBinDto = ngBinMapper.retrieveNgBinList(ngBinCondDto);
        //ngBin을 ","로 split해서 Map에 key 를 누적 put 해서 표현 해야 할 ngBin리스트를 만듬 값은 "" 없음
        // 추후 NG_BIN_DTO 맴으로 가져와 여기서 만들어진 ngBin리스트를 추가 하고 맵으로 가져온 ngbin을 key, value로 put하면 없는 값은 "" 있는 값은 value로 치환될 것임
        Map<Integer, String> mapNgBin = new TreeMap<>();
        for (NgBinResultDto bin : lstNgBinDto) {
            String strBin = bin.getNgBin();
            String[] arrayBin = strBin.split(",");
            for (int i = 0; i < arrayBin.length - 2; i = i + 2) {
                mapNgBin.put(Integer.parseInt(arrayBin[i]), "");
            }
        }

        List<Map<String, NgBinResultDto>> mapNgBinDto = ngBinMapper.retrieveNgBinMap(ngBinCondDto);
        List returnDto = new ArrayList();

        for (Map<String, NgBinResultDto> map : mapNgBinDto) {
            Map<String, String> ngBinRow = new LinkedHashMap<String, String>();
            int totalBinCount = 0;
            for (Map.Entry<String, NgBinResultDto> entry : map.entrySet()) {
                String key = entry.getKey();
                String value = String.valueOf(entry.getValue());

                if (key.equals("NG_BIN")) {
                    // 위에서 만든 ngBin리스트를 추가합
                    for (Map.Entry<Integer, String> entry2 : mapNgBin.entrySet()) {
                        String key2 = Integer.toString(entry2.getKey());
                        ngBinRow.put("ngBin" + key2, "");
                    }
                    //지금 읽어온 ngBin값을 put 해서 치환 함
                    String[] strBin = value.split(",");
                    for (int i = 0; i < strBin.length - 2; i = i + 2) {
                        ngBinRow.put("ngBin" + strBin[i], strBin[i + 1]);

                        totalBinCount += Integer.parseInt(strBin[i + 1]);   // 각 Row의 총 개수를 계산한다
                    }
                } else {
                    ngBinRow.put(key, value);   // NG_BIN
                }
            }
            ngBinRow.put("NG_BIN_TOTAL", String.valueOf(totalBinCount));
            returnDto.add(ngBinRow);
        }
        return returnDto;
    }
}