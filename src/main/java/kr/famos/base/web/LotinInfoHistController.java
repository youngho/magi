package kr.famos.base.web;

import kr.famos.base.dao.LotinInfoHistDao;
import kr.famos.base.domain.LotinInfoHist;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@RestController
public class LotinInfoHistController {
    private static final Logger logger = LoggerFactory.getLogger(LotinInfoHistController.class);

    @Autowired
    private LotinInfoHistDao lotinInfoHistDao;

    @RequestMapping(value="/lotininfohist")
    public ResponseEntity<List<LotinInfoHist>> lotinInfoHistList(){
        logger.info("LotinInfoHistController 호출!");
        return new ResponseEntity<List<LotinInfoHist>>(lotinInfoHistDao.retrieveLotinInfoHist(), HttpStatus.OK);
    }
}
