package kr.famos.bets.web;

import kr.famos.bets.dao.LastTableDao;
import kr.famos.bets.domain.LastTable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@RestController
public class LastTableController {
    private static final Logger logger = LoggerFactory.getLogger(LastTableController.class);
    @Autowired
    private LastTableDao lastTableDao;

    @RequestMapping(value = "/lastTable")
    public ResponseEntity<List<LastTable>> get(@RequestParam("tester") String tester) {
        logger.debug("LastTableController get 함수");
        LastTable lastTable = new LastTable();
//        lastTable.setTester("T5585");
//        lastTable.setMainPgm("xp6a86cx");
//        lastTable.setTester(tester);

        return new ResponseEntity<List<LastTable>>(lastTableDao.retrieveLastTable(lastTable), HttpStatus.OK);
    }

    @RequestMapping(value = "/retrieveLastTable", method = RequestMethod.POST)
    public ResponseEntity<List<LastTable>> retrieveLastTable(@RequestBody LastTable lastTable) {
        logger.debug("LastTableController retrieveLastTable 함수");
//        lastTable.setTester("T5585");
//        lastTable.setMainPgm("xp6a86cx");
        return new ResponseEntity<List<LastTable>>(lastTableDao.retrieveLastTable(lastTable), HttpStatus.OK);
    }

    @RequestMapping(value="/lastTable", method = RequestMethod.POST)
    public void post(@RequestBody LastTable lastTable) {
        logger.debug("lasttableinsert post 함수  ");
//        LastTable lastTable = new LastTable();
//        lastTable.setOperator("youngho");
//        lastTable.setSysDate("sysdate");
        lastTableDao.insertLastTable(lastTable);
    }
}
