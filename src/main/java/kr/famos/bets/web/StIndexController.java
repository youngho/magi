package kr.famos.bets.web;

import kr.famos.bets.dao.StIndexDao;
import kr.famos.bets.domain.StIndex;
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
public class StIndexController {
    private static final Logger logger = LoggerFactory.getLogger(StIndexController.class);
    @Autowired
    private StIndexDao stIndexDao;

    @RequestMapping(value = "/stIndex")
    public ResponseEntity<List<StIndex>> get() {
        logger.debug("StIndexController 컨트롤러 호출입니다");
        return new ResponseEntity<List<StIndex>>(stIndexDao.retrieveStIndex(), HttpStatus.OK);
    }
}
