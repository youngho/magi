package kr.famos.com.service;


import kr.famos.com.dto.ComUserUsageCondDto;
import kr.famos.com.dto.ComUserUsageDto;
import kr.famos.com.mapper.ComUserUsageMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class ComUserUsageService {

    private static final Logger logger = LoggerFactory.getLogger(ComUserUsageService.class);

    @Autowired
    ComUserUsageMapper comUserUsageMapper;

    public List<ComUserUsageDto> retrieveComUserUsage(ComUserUsageCondDto comUserUsageDto) {

        return comUserUsageMapper.retrieveComUserUsage(comUserUsageDto);
    }

    public void insertComUserUsage(ComUserUsageDto comUserUsageDto) {
        //시스템 시간을 구해서 createDate에 넣는다.
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyyMMddHHmmss");
        String strDate = dayTime.format(new Date(time));

        comUserUsageDto.setCreateDate(strDate);

        comUserUsageMapper.insertComUserUsage(comUserUsageDto);
    }


}
