package kr.famos.base.web;

import kr.famos.base.domain.Bibendwork;
import kr.famos.base.mapper.BibendworkMapper;
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
    BibendworkMapper bibendworkMapper;

    @RequestMapping(value="/bibendwork")
    public ResponseEntity<List<Bibendwork>> get() {
        logger.info(" 이것은 BibendworkController 컨트롤러 호출입니다");
        List<Bibendwork> bibendworkList = bibendworkMapper.readAllBibendwork();
        return  new ResponseEntity<List<Bibendwork>>(bibendworkList, HttpStatus.OK);
    }
}
