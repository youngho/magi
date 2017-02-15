package kr.famos.base.web;

import kr.famos.base.dao.BibendworkDao;
import kr.famos.base.domain.Bibendwork;
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
public class BibendworkController {

    private static final Logger logger = LoggerFactory.getLogger(BibendworkController.class);
    @Autowired
    private BibendworkDao bibendworkDao;

    @RequestMapping(value="/bibendwork")
    public ResponseEntity<List<Bibendwork>> get() {
        logger.debug(" 이것은 BibendworkController 컨트롤러 호출입니다");

        return  new ResponseEntity<List<Bibendwork>>(bibendworkDao.retrieveBibendwork(), HttpStatus.OK);
    }
}
