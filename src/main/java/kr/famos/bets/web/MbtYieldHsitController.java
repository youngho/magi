package kr.famos.bets.web;

import kr.famos.bets.dao.MbtYieldHistDao;
import kr.famos.bets.domain.MbtYieldHist;
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
public class MbtYieldHsitController {
    private static final Logger logger = LoggerFactory.getLogger(MbtLastTableEventController.class);
    @Autowired
    private MbtYieldHistDao mbtYieldHistDao;

    @RequestMapping(value = "/MbtYieldHsit")
    public ResponseEntity<List<MbtYieldHist>> get() {
        logger.debug(" 이것은 MbtLastTableEventController 컨트롤러 호출입니다");
        return new ResponseEntity<List<MbtYieldHist>>(mbtYieldHistDao.retrieveMbtYieldHist(), HttpStatus.OK);
    }
}