package kr.famos.base.web;

import kr.famos.base.dao.MbtLastTableEventDao;
import kr.famos.base.domain.MbtLastTableEvent;
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
    private MbtLastTableEventDao mbtLastTableEventDao;

    @RequestMapping(value = "/mbtlasttableevent")
    public ResponseEntity<List<MbtLastTableEvent>> get() {
        logger.debug("MbtLastTableEventController 컨트롤러 호출입니다");
        return new ResponseEntity<List<MbtLastTableEvent>>(mbtLastTableEventDao.retrieveMbtLastTableEvent(), HttpStatus.OK);
    }
}
