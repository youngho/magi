package kr.famos.bets.history.chipId.service;

import kr.famos.bets.history.chipId.dto.ChipIdCondDto;
import kr.famos.bets.history.chipId.dto.ChipIdResultDto;
import kr.famos.bets.history.chipId.mapper.ChipIdMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Service
public class ChipIdService {
    private static final Logger logger = LoggerFactory.getLogger(ChipIdService.class);

    @Autowired
    ChipIdMapper chipIdMapper;

    public List<ChipIdResultDto> retrieveChipId(ChipIdCondDto chipIdCondDto) {

        return chipIdMapper.retrieveChipId(chipIdCondDto);
    }
}
