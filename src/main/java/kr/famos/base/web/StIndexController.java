package kr.famos.base.web;

import kr.famos.base.domain.StIndex;
import kr.famos.base.mapper.StIndexMapper;
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
    StIndexMapper stIndexMapper;

    @RequestMapping(value="/stindex")
    public ResponseEntity<List<StIndex>> get() {
        logger.info(" 이것은 StIndexController 컨트롤러 호출입니다");
        List<StIndex> list = stIndexMapper.readAllStIndex();
        return new ResponseEntity<List<StIndex>>(list, HttpStatus.OK);
    }
}
