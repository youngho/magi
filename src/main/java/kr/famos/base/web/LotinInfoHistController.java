package kr.famos.base.web;

import kr.famos.base.domain.LotinInfoHist;
import kr.famos.base.mapper.LotinInfoHistMapper;
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
    LotinInfoHistMapper lotinInfoHistMapper;

    @RequestMapping(value="/lotininfohist")
    public ResponseEntity<List<LotinInfoHist>> get() {
        logger.info(" 이것은 LotinInfoHistController 컨트롤러 호출입니다");
        List<LotinInfoHist> list = lotinInfoHistMapper.readAllLotinInfoHist();
        return new ResponseEntity<List<LotinInfoHist>>(list, HttpStatus.OK);
    }
}
