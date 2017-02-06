package kr.famos.base.web;

import kr.famos.base.domain.SblResult;
import kr.famos.base.mapper.SblResultMapper;
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
    SblResultMapper sblResultMapper;

    @RequestMapping(value="/SblResult")
    public ResponseEntity<List<SblResult>> get() {
        logger.info(" 이것은 SblResultController 컨트롤러 호출입니다");
        List<SblResult> list = sblResultMapper.readAllSblResult();
        return new ResponseEntity<List<SblResult>>(list, HttpStatus.OK);
    }
}
