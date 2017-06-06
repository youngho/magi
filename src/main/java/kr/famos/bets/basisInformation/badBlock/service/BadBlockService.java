package kr.famos.bets.basisInformation.badBlock.service;

import kr.famos.bets.basisInformation.badBlock.dto.BadBlockDto;
import kr.famos.bets.basisInformation.badBlock.mapper.BadBlockMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Service
public class BadBlockService {

    private static final Logger logger = LoggerFactory.getLogger(BadBlockService.class);

    @Autowired
    BadBlockMapper badBlockMapper;

    public List<BadBlockDto> retrieveBadBlock(BadBlockDto badBlockDto) {
        List<BadBlockDto> badBlockDtoList = badBlockMapper.retrieveBadBlock(badBlockDto);
        return badBlockDtoList;
    }

    public BadBlockDto retrieveBadBlockByKey(BadBlockDto badBlockDto) {
        BadBlockDto result = badBlockMapper.retrieveBadBlockByKey(badBlockDto);
        return result;
    }

    public void insertBadBlock(BadBlockDto badBlockDto) {
        badBlockMapper.insertBadBlock(badBlockDto);
    }
}
