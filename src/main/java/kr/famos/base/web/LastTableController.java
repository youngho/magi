package kr.famos.base.web;

import kr.famos.base.domain.Bibendwork;
import kr.famos.base.domain.LastTable;
import kr.famos.base.mapper.LastTableMapper;
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
public class LastTableController {
    private static final Logger logger = LoggerFactory.getLogger(BibendworkController.class);
    @Autowired
    LastTableMapper lastTableMapper;

    @RequestMapping(value="/lastTable")
    public ResponseEntity<List<LastTable>> get() {
        logger.debug(" 이것은 LastTableController 컨트롤러 호출입니다");
        List<LastTable> lastTableList = lastTableMapper.readAllLastTable();
        return  new ResponseEntity<List<LastTable>>(lastTableList, HttpStatus.OK);
    }

    @RequestMapping(value="/lasttableinsert")
    public void post() {
        logger.debug("lasttableinsert post 함수  ");
        LastTable lastTable = new LastTable();
        lastTable.setUserId("youngho");
        lastTableMapper.insertLastTable(lastTable);
    }
}
