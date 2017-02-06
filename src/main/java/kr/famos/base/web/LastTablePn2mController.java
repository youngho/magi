package kr.famos.base.web;

import kr.famos.base.domain.LastTablePn2m;
import kr.famos.base.mapper.LastTablePn2mMapper;
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
    LastTablePn2mMapper lastTablePn2mMapper;

    @RequestMapping(value="/lasttablepn2m")
    public ResponseEntity<List<LastTablePn2m>> get() {
        logger.info(" 이것은 LastTablePn2mController 컨트롤러 호출입니다");
        List<LastTablePn2m> lastTablePn2mList = lastTablePn2mMapper.readAllLastTablePn2m();
        return new ResponseEntity<List<LastTablePn2m>>(lastTablePn2mList, HttpStatus.OK);
    }
}
