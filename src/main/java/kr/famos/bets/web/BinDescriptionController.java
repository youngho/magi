package kr.famos.bets.web;

import kr.famos.bets.dao.BinDescriptionDao;
import kr.famos.bets.domain.BinDescription;
import kr.famos.com.web.ComAuthorityController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-02-21.
 */
@RestController
public class BinDescriptionController {
    private static final Logger logger = LoggerFactory.getLogger(ComAuthorityController.class);
    @Autowired
    private BinDescriptionDao binDescriptionDao;

    @RequestMapping(value = "/retrieveBinDescription", method = RequestMethod.POST)
    public ResponseEntity<List<BinDescription>> retrieveBinDescription(@RequestBody BinDescription binDescription) {
        logger.debug("BinDescriptionController - retireve 메소드");
        return new ResponseEntity<List<BinDescription>>(binDescriptionDao.retrieveBinDescription(binDescription), HttpStatus.OK);
    }


    @RequestMapping(value = "/insertBinDescription", method = RequestMethod.POST)
    public void post(@RequestBody BinDescription binDescription) {
        logger.debug("BinDescriptionController - post 함수");

        logger.debug(binDescription.getPartNumber());
        logger.debug(binDescription.getMainProgramName());
        logger.debug(binDescription.getProcessCode());
        logger.debug(binDescription.getTesterModel());

        binDescriptionDao.insertBinDescription(binDescription);
    }
}
