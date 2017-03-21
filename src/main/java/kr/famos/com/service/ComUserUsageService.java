package kr.famos.com.service;


import kr.famos.com.dto.ComUserUsageDto;
import kr.famos.com.mapper.ComUserUsageMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class ComUserUsageService {

    private static final Logger logger = LoggerFactory.getLogger(ComUserUsageService.class);

    @Autowired
    ComUserUsageMapper comUserUsageMapper;

    public List<ComUserUsageDto> retrieveComUserUsage(ComUserUsageDto comUserUsageDto) {

        return comUserUsageMapper.retrieveComUserUsage(comUserUsageDto);
    }

    public void insertComUserUsage(ComUserUsageDto comUserUsageDto) {
        comUserUsageMapper.insertComUserUsage(comUserUsageDto);
    }


}
