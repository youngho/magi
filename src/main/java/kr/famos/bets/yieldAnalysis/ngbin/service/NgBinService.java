package kr.famos.bets.yieldAnalysis.ngbin.service;

import com.google.gson.Gson;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import kr.famos.bets.yieldAnalysis.ngbin.mapper.NgBinMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Created by yhkim on 2017-03-08.
 */
@Service
public class NgBinService {
    private static final Logger logger = LoggerFactory.getLogger(NgBinService.class);

    @Autowired
    NgBinMapper ngBinMapper;

    public List<NgBinDto> retireveNgBin(NgBinDto ngBinDto) {
        List<NgBinDto> ngBinDtoList = ngBinMapper.retireveNgBin(ngBinDto);
        return ngBinDtoList;
    }

    public List<NgBinResultDto> retrieveNgBinJson(NgBinDto ngBinDto) {

        List<NgBinDto> ngBinDtoList = ngBinMapper.retireveNgBinJson(ngBinDto);

        List<NgBinResultDto> ngBinResultDtoList = new ArrayList<>();
        logger.debug("SubBinService - retrieveSubBin : " + ngBinDtoList.get(0));

        //반환된 리스트의 각 한줄을 파싱하여 새로운 JSON 객체로 변환하여 리턴한다.
        //변환된 JSON에는 엔지빈의 번호에 따라
        for(NgBinDto list : ngBinDtoList){
            String strNgBin = list.getNgBin();
            StringTokenizer tokens = new StringTokenizer(strNgBin, ",");    //맵으로 분리
            HashMap<Integer, String> map = new HashMap<>();
            String ngBintoken;
            int mapKey = 0;
            String mapValue;

            int tokenTotal = tokens.countTokens();
            for (int i = 0; i < tokenTotal; i++) {
                if (i % 2 == 0) {
                    ngBintoken = tokens.nextToken();
                    mapKey = Integer.parseInt(ngBintoken);
                } else {
//                    mapValue = Integer.parseInt(tokens.nextToken());
                    mapValue = tokens.nextToken();
                    map.put(mapKey, mapValue);
                }
            }

            TreeMap<Integer, String> tm = new TreeMap<>(map);    //기본 오름차순 정렬
//            System.out.println(tm);

            //맵에서 다시 꺼내어 반환 타입에 넣는다.
            NgBinResultDto ngBinResultDto = new NgBinResultDto();
            ngBinResultDto.setPartNumber(list.getPartNumber());
            ngBinResultDto.setOperatorId(list.getOperatorId());
            ngBinResultDto.setLotId(list.getLotId());
            ngBinResultDto.setLotInTime(list.getLotInTime());
            ngBinResultDto.setEndTime(list.getEndTime());
            ngBinResultDto.setProcessCode(list.getProcessCode());
            ngBinResultDto.setTesterModel(list.getTesterModel());
            ngBinResultDto.setTesterNumber(list.getTesterNumber());
            ngBinResultDto.setHead(list.getHead());
            ngBinResultDto.setTestCounter(list.getTestCounter());
            ngBinResultDto.setHandlerModel(list.getHandlerModel());
            ngBinResultDto.setBoardId(list.getBoardId());

            Iterator<Integer> keySetIterator = tm.keySet().iterator();
            while (keySetIterator.hasNext()) {
                Integer key = keySetIterator.next();
    //            System.out.println("key: " + key + " value: " + map.get(key));
    //            allColumns += ",\"NGBIN" + key +"\":\"" +map.get(key)+"\"";
                if (key.equals(1)){ngBinResultDto.setNGBIN1(map.get(key));}
                if (key.equals(2)){ngBinResultDto.setNGBIN2(map.get(key));}
                if (key.equals(3)){ngBinResultDto.setNGBIN3(map.get(key));}
            }
            ngBinResultDtoList.add(ngBinResultDto);
        }



//        stringList.add(allColumns);
        return ngBinResultDtoList;
    }

    public Map<String, Object> retrieveNgBinJson2(NgBinDto ngBinDto) {
        List<NgBinDto> ngBinDtoList = ngBinMapper.retireveNgBin(ngBinDto);

        logger.debug("NgBinService - retrieveNgBinJson2 : " + ngBinDtoList.get(0).getNgBin());

        return null;
    }
}
