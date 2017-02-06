package kr.famos.base.web;

import kr.famos.base.domain.MbtLastTableEvent;
import kr.famos.base.mapper.MbtLastTableEventMapper;
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
public class MbtLastTableEventController {
    private static final Logger logger = LoggerFactory.getLogger(MbtLastTableEventController.class);
    @Autowired
    MbtLastTableEventMapper mbtLastTableEventMapper;

    @RequestMapping(value="/mbtlasttableevent")
    public ResponseEntity<List<MbtLastTableEvent>> get() {
        logger.debug(" 이것은 MbtLastTableEventController 컨트롤러 호출입니다");
        List<MbtLastTableEvent> list = mbtLastTableEventMapper.readAllMbtLastTableEvent();
        return new ResponseEntity<List<MbtLastTableEvent>>(list, HttpStatus.OK);
    }
}
