package kr.famos.bets.yieldAnalysis.subbin.service;

import kr.famos.bets.yieldAnalysis.subbin.dto.SubBinDto;
import kr.famos.bets.yieldAnalysis.subbin.mapper.SubBinMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by yhkim on 2017-02-27.
 */
@Service
public class SubBinService {

    private static final Logger logger = LoggerFactory.getLogger(SubBinService.class);

    private final SubBinMapper subBinMapper;

    @Autowired
    public SubBinService(SubBinMapper subBinMapper) {
        this.subBinMapper = subBinMapper;
    }

    public List<SubBinDto> retrieveSubBin(SubBinDto subBinDto) {
        List<SubBinDto> subBinDtoList = subBinMapper.retrieveSubBin(subBinDto);

        logger.debug("SubBinService - retrieveSubBin : " + subBinDtoList.get(0).getSubBin());

        return subBinDtoList;
    }

    public void retrieveSubBinJson(SubBinDto subBinDto) {
        List<SubBinDto> subBinDtoList = subBinMapper.retrieveSubBin(subBinDto);

        logger.debug("SubBinService - retrieveSubBin : " + subBinDtoList.get(0).getSubBin());

        //반환된 리스트의 각 한줄을 파싱하여 새로운 JSON 객체로 변환하여 리턴한다.
        //변환된 JSON에는 서브빈의 번호에 따라
        String strSubBin = subBinDtoList.get(0).getSubBin();

        //HashMap<String, Integer>map = new HashMap<String,Integer>();

        StringTokenizer tokens = new StringTokenizer(strSubBin, " ");

        HashMap<Integer, Integer> map = new HashMap<>();
        String d;
        int dd = 0;
        int ee;

        int b = tokens.countTokens();
        for (int i = 0; i < b; i++) {
            if (i % 2 == 0) {
                d = tokens.nextToken();
                dd = Integer.parseInt(d);
            } else {
                ee = Integer.parseInt(tokens.nextToken());
                map.put(dd, ee);
            }
        }
        TreeMap<Integer, Integer> tm = new TreeMap<>(map);    //기본 오름차순 정렬
        System.out.println(tm);
    }

    public Map<String, Object> retrieveSubBinJson2(SubBinDto subBinDto) {
        List<SubBinDto> subBinDtoList = subBinMapper.retrieveSubBin(subBinDto);

        logger.debug("SubBinService - retrieveSubBin : " + subBinDtoList.get(0).getSubBin());

        return null;
    }
}
