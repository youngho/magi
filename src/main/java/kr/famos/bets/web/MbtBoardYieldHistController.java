package kr.famos.bets.web;

import kr.famos.bets.dao.MbtBoardYieldHistDao;
import kr.famos.bets.domain.MbtBoardYieldHist;
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
public class MbtBoardYieldHistController {
    private static final Logger logger = LoggerFactory.getLogger(MbtBoardYieldHistController.class);
    @Autowired
    private MbtBoardYieldHistDao mbtBoardYieldHistDao;

    @RequestMapping(value = "/mbtboardyieldhist")
    public ResponseEntity<List<MbtBoardYieldHist>> get() {
        logger.debug("MbtBoardYieldHistController 컨트롤러 호출입니다");
        return new ResponseEntity<List<MbtBoardYieldHist>>(mbtBoardYieldHistDao.retrieveMbtBoardYieldHist(), HttpStatus.OK);
    }
}
