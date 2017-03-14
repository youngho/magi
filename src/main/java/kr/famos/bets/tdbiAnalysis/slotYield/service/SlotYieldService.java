package kr.famos.bets.tdbiAnalysis.slotYield.service;

import kr.famos.bets.tdbiAnalysis.slotYield.dto.SlotYieldDto;
import kr.famos.bets.tdbiAnalysis.slotYield.mapper.SlotYieldMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class SlotYieldService {

    private static final Logger logger = LoggerFactory.getLogger(SlotYieldService.class);

    @Autowired
    SlotYieldMapper slotYieldMapper;

    public List<SlotYieldDto> retrieveSlotYield(SlotYieldDto slotYieldDto) {
        return slotYieldMapper.retrieveSlotYield(slotYieldDto);
    }


}
