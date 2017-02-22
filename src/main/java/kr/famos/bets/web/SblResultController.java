package kr.famos.bets.web;

import kr.famos.bets.dao.SblResultDao;
import kr.famos.bets.domain.SblResult;
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
public class SblResultController {
    private static final Logger logger = LoggerFactory.getLogger(SblResultController.class);
    @Autowired
    private SblResultDao sblResultDao;

    @RequestMapping(value = "/sblResult")
    public ResponseEntity<List<SblResult>> get() {
        logger.debug("SblResultController 컨트롤러 호출입니다");
        return new ResponseEntity<List<SblResult>>(sblResultDao.retrieveSblResult(), HttpStatus.OK);
    }
}
