package kr.famos.base.web;

import kr.famos.base.domain.MbtLastTable;
import kr.famos.base.mapper.MbtLastTableMapper;
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
    MbtLastTableMapper mbtLastTableMapper;

    @RequestMapping(value="/mbtlasttable")
    public ResponseEntity<List<MbtLastTable>> get() {
        logger.info(" 이것은 MbtLastTableController 컨트롤러 호출입니다");
        List<MbtLastTable> list = mbtLastTableMapper.readAllMbtLastTable();
        return new ResponseEntity<List<MbtLastTable>>(list, HttpStatus.OK);
    }
}
