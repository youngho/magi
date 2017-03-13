package kr.famos.bets.sblAnalysis.yieldAbnormal.rest;

import kr.famos.bets.sblAnalysis.yieldAbnormal.service.YieldAbnormalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yhkim on 2017-03-13.
 */
@RestController
public class YieldAbnormailController {

    private static final Logger logger = LoggerFactory.getLogger(YieldAbnormailController.class);

    @Autowired
    YieldAbnormalService yieldAbnormalService;


}
