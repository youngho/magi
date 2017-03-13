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

        List<NgBinDto> ngBinDtoList = ngBinMapper.retrieveNgBin(ngBinDto);
        return ngBinDtoList;
    }

    public List<Map<String,NgBinDto>> retrieveNgBinMap(NgBinDto ngBinDto) {

        List<Map<String,NgBinDto>> ngBinDtoList = ngBinMapper.retrieveNgBinMap(ngBinDto);
        logger.debug("SubBinService - retrieveSubBin : " + ngBinDto.getTestCounter());

        return ngBinDtoList;
    }

    public List<NgBinDto> retrieveNgBinList(NgBinDto ngBinDto) {

        List<NgBinDto> ngBinDtoList = ngBinMapper.retrieveNgBinList(ngBinDto);
        logger.debug("SubBinService - retrieveSubBin : " + ngBinDto.getTestCounter());

        return ngBinDtoList;
    }



//    public Map<String, Object> retrieveNgBinJson2(NgBinDto ngBinDto) {
//        List<NgBinDto> ngBinDtoList = ngBinMapper.retireveNgBin(ngBinDto);
//
//        logger.debug("NgBinService - retrieveNgBinJson2 : " + ngBinDtoList.get(0).getNgBin());
//
//        return null;
//    }
}
