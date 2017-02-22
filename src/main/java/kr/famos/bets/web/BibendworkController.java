package kr.famos.bets.web;

import kr.famos.bets.dao.BibendworkDao;
import kr.famos.bets.domain.Bibendwork;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@RestController
public class BibendworkController {

    private static final Logger logger = LoggerFactory.getLogger(BibendworkController.class);
    @Autowired
    private BibendworkDao bibendworkDao;

    @RequestMapping(value="/bibendwork")
    public ResponseEntity<List<Bibendwork>> get(@RequestBody Bibendwork bibendwork) {
        logger.debug(" 이것은 BibendworkController 컨트롤러 호출입니다");

        return  new ResponseEntity<List<Bibendwork>>(bibendworkDao.retrieveBibendwork(bibendwork), HttpStatus.OK);
    }
}
