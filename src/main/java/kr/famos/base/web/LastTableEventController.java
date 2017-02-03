package kr.famos.base.web;

import kr.famos.base.dao.LastTableEventDao;
import kr.famos.base.domain.LastTableEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
    private LastTableEventDao lastTableEventDao;

    @RequestMapping(value="/lasttableevent")
    public List<LastTableEvent>lastTableEvents(){
        logger.info("LastTableEventController 호출!");
        return lastTableEventDao.retrieveLastTableEvent();
    }
}
