package kr.famos.base.web;

import kr.famos.base.domain.TestYieldHist;
import kr.famos.base.mapper.TestYieldHistMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by x on 2017. 1. 11..
 */
@RestController
public class TestYieldHistController {
    private static final Logger logger = LoggerFactory.getLogger(TestYieldHistController.class);

    @Autowired
    TestYieldHistMapper testYieldHistMapper;

    @RequestMapping("/base/{sys_date}")
    public ResponseEntity<TestYieldHist> get(
            @PathVariable String sys_date) {
        TestYieldHist testYieldHist = testYieldHistMapper.readTestYieldHist(sys_date);
        logger.debug(sys_date + " 이것은 base 컨트롤러 호출입니다");

        return new ResponseEntity<TestYieldHist> (testYieldHist, HttpStatus.OK);
    }

    @RequestMapping(value = "/tests", method = RequestMethod.GET)
    public ResponseEntity<List<TestYieldHist>> get() {

        List<TestYieldHist> testYieldHists = testYieldHistMapper.readAllTestYieldHist();
        // TODO: call persistence layer to update
        return new ResponseEntity<List<TestYieldHist>>(testYieldHists, HttpStatus.OK);
    }



}
