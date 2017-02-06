package kr.famos.base.web;

import kr.famos.base.domain.LastTableEvent;
import kr.famos.base.mapper.LastTableEventMapper;
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
public class LastTableEventController {
    private static final Logger logger = LoggerFactory.getLogger(LastTableEventController.class);
    @Autowired
    LastTableEventMapper lastTableEventMapper;

    @RequestMapping(value="/lasttableevent")
    public ResponseEntity<List<LastTableEvent>> get() {
        logger.debug(" 이것은 LastTableEventController 컨트롤러 호출입니다");
        List<LastTableEvent> lastTableEventList = lastTableEventMapper.readAllLastTableEvent();
        return  new ResponseEntity<List<LastTableEvent>>(lastTableEventList, HttpStatus.OK);
    }
}
