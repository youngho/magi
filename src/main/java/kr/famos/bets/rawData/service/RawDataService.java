package kr.famos.bets.rawData.service;

import kr.famos.bets.rawData.dto.RawDataResultDto;
import kr.famos.bets.rawData.dto.RawDataRetrieveCondDto;
import kr.famos.bets.rawData.mapper.RawDataMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Service
public class RawDataService {

    @Autowired
    RawDataMapper rawDataMapper;

    public List<RawDataResultDto> retrieveRawData(RawDataRetrieveCondDto rawDataResultDto){
        return rawDataMapper.retrieveRawData(rawDataResultDto);
    }
}
