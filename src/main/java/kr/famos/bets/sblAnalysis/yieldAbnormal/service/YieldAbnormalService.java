package kr.famos.bets.sblAnalysis.yieldAbnormal.service;

import kr.famos.bets.sblAnalysis.yieldAbnormal.mapper.YieldAbnormalMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class YieldAbnormalService {

    private static final Logger logger = LoggerFactory.getLogger(YieldAbnormalService.class);

    @Autowired
    YieldAbnormalMapper yieldAbnormalMapper;


}
