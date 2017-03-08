package kr.famos.bets.yieldAnalysis.ngbin.service;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import kr.famos.bets.yieldAnalysis.ngbin.mapper.NgBinMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public List<NgBinDto> retrieveNgBinJson(NgBinDto ngBinDto) {
        List<NgBinDto> ngBinDtoList = ngBinMapper.retireveNgBin(ngBinDto);

        logger.debug("SubBinService - retrieveSubBin : " + ngBinDtoList.get(0));

        //반환된 리스트의 각 한줄을 파싱하여 새로운 JSON 객체로 변환하여 리턴한다.
        //변환된 JSON에는 엔지빈의 번호에 따라
        String strSubBin = ngBinDtoList.get(0).getNgBin();

//        List mList = new ArrayList();
//        // List -> String[]
//        String[] sArrays = mList.toArray(new String[mList.size()]);
//
//        for(String s : sArrays){
//            System.out.println(s);
//        }

//        String[] strArray = ngBinDtoList.toArray(new String[ngBinDtoList.size()]);
//        for (int i = 0; i < strArray.length; i++) {
//            System.out.println("output : " + strArray[i]);
//        }


        //HashMap<String, Integer>map = new HashMap<String,Integer>();

        StringTokenizer tokens = new StringTokenizer(strSubBin, ",");

        HashMap<Integer, Integer> map = new HashMap<>();
        String ngBintoken;
        int mapKey = 0;
        int mapValue;

        int tokenTotal = tokens.countTokens();
        for (int i = 0; i < tokenTotal; i++) {
            if (i % 2 == 0) {
                ngBintoken = tokens.nextToken();
                mapKey = Integer.parseInt(ngBintoken);
            } else {
                mapValue = Integer.parseInt(tokens.nextToken());
                map.put(mapKey, mapValue);
            }

        }

        TreeMap<Integer, Integer> tm = new TreeMap<>(map);    //기본 오름차순 정렬
        System.out.println(tm);

        return ngBinDtoList;
    }

    public Map<String, Object> retrieveNgBinJson2(NgBinDto ngBinDto) {
        List<NgBinDto> ngBinDtoList = ngBinMapper.retireveNgBin(ngBinDto);

        logger.debug("NgBinService - retrieveNgBinJson2 : " + ngBinDtoList.get(0).getNgBin());

        return null;
    }
}
