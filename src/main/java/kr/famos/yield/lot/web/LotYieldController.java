package kr.famos.yield.lot.web;

import kr.famos.com.web.ComAuthorityController;
import kr.famos.yield.lot.dao.LotYieldDao;
import kr.famos.yield.lot.domain.LotYield;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-02-21.
 */
@RestController
public class LotYieldController {
    private static final Logger logger = LoggerFactory.getLogger(ComAuthorityController.class);

    @Autowired
    private LotYieldDao lotYieldDao;

    @RequestMapping(value = "/retireveLotYield", method = RequestMethod.POST)
    public ResponseEntity<List<LotYield>> retireveLotYield(@RequestBody LotYield lotYield) {
        logger.debug("LotYieldController - retireveLotYield 메소드");
//        logger.debug(lotYield.getBoardId());
        return new ResponseEntity<List<LotYield>>(lotYieldDao.retrieveLotYield(lotYield), HttpStatus.OK);
    }
}
