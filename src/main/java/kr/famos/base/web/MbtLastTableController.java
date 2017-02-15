package kr.famos.base.web;

import kr.famos.base.dao.MbtLastTableDao;
import kr.famos.base.domain.MbtLastTable;
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
public class MbtLastTableController {
    private static final Logger logger = LoggerFactory.getLogger(MbtLastTableController.class);
    @Autowired
    private MbtLastTableDao mbtLastTableDao;

    @RequestMapping(value = "/mbtlasttable")
    public ResponseEntity<List<MbtLastTable>> get() {
        logger.debug(" 이것은 MbtLastTableController 컨트롤러 호출입니다");
        return new ResponseEntity<List<MbtLastTable>>(mbtLastTableDao.retrieveMbtLastTable(), HttpStatus.OK);
    }
}
