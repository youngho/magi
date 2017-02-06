package kr.famos.base.web;

import kr.famos.base.domain.TestYieldHistErr;
import kr.famos.base.mapper.TestYieldHistErrMapper;
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
    TestYieldHistErrMapper testYieldHistErrMapper;

    @RequestMapping(value="/testyieldhisterr")
    public ResponseEntity<List<TestYieldHistErr>> get() {
        logger.debug(" 이것은 TestYieldHistErrController 컨트롤러 호출입니다");
        List<TestYieldHistErr> list = testYieldHistErrMapper.readAllTestYieldHistErr();
        return new ResponseEntity<List<TestYieldHistErr>>(list, HttpStatus.OK);
    }
}
