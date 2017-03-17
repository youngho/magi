package kr.famos.bets.history.lcRevision.service;

import kr.famos.bets.history.lcRevision.dto.LcRevisionDto;
import kr.famos.bets.history.lcRevision.mapper.LcRevisionMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Service
public class LcRevisionService {
    private static final Logger logger = LoggerFactory.getLogger(LcRevisionService.class);

    @Autowired
    LcRevisionMapper lcRevisionMapper;

    public List<LcRevisionDto> retrieveLcRevision(LcRevisionDto lcRevisionDto) {

        return lcRevisionMapper.retrieveLcRevision(lcRevisionDto);
    }
}
