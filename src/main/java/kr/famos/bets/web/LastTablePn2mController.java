package kr.famos.bets.web;

import kr.famos.bets.dao.LastTablePn2mDao;
import kr.famos.bets.domain.LastTablePn2m;
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
public class LastTablePn2mController {
    private static final Logger logger = LoggerFactory.getLogger(LastTablePn2mController.class);
    @Autowired
    private LastTablePn2mDao lastTablePn2mDao;

    @RequestMapping(value = "/lasttablepn2m")
    public ResponseEntity<List<LastTablePn2m>> get() {
        logger.info(" 이것은 LastTablePn2mController 컨트롤러 호출입니다");
        return new ResponseEntity<List<LastTablePn2m>>(lastTablePn2mDao.retrieveLastTablePn2m(), HttpStatus.OK);
    }
}
