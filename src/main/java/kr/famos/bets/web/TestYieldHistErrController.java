package kr.famos.bets.web;

import kr.famos.bets.dao.TestYieldHistErrDao;
import kr.famos.bets.domain.TestYieldHistErr;
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
public class TestYieldHistErrController {
    private static final Logger logger = LoggerFactory.getLogger(TestYieldHistErrController.class);
    @Autowired
    private TestYieldHistErrDao testYieldHistErrDao;

    @RequestMapping(value = "/testyieldhisterr")
    public ResponseEntity<List<TestYieldHistErr>> get() {
        logger.debug(" 이것은 TestYieldHistErrController 컨트롤러 호출입니다");
        return new ResponseEntity<List<TestYieldHistErr>>(testYieldHistErrDao.retrieveTestYieldHistErr(), HttpStatus.OK);
    }
}
