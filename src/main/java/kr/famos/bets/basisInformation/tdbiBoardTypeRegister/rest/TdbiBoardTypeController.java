package kr.famos.bets.basisInformation.tdbiBoardTypeRegister.rest;

import kr.famos.bets.basisInformation.tdbiBoardTypeRegister.dto.TdbiBoardTypeDto;
import kr.famos.bets.basisInformation.tdbiBoardTypeRegister.service.TdbiBoardTypeService;
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
 * Created by yhkim on 2017-02-27.
 */
@RestController
public class TdbiBoardTypeController {
    private static final Logger logger = LoggerFactory.getLogger(TdbiBoardTypeController.class);

    @Autowired
    private TdbiBoardTypeService tdbiBoardTypeService;

    @RequestMapping(value = "retrieveTdbiBoardType", method = RequestMethod.POST)
    public ResponseEntity<List<TdbiBoardTypeDto>>retrieveTdbiBoardType(@RequestBody TdbiBoardTypeDto tdbiBoardTypeDto){
        return new ResponseEntity<List<TdbiBoardTypeDto>>(tdbiBoardTypeService.retrieveTdbiBoardType(tdbiBoardTypeDto), HttpStatus.OK);
    }

    @RequestMapping(value = "retrieveTdbiBoardTypeByKey", method = RequestMethod.POST)
    public ResponseEntity<TdbiBoardTypeDto>retrieveTdbiBoardTypeByKey(@RequestBody TdbiBoardTypeDto tdbiBoardTypeDto){
        return new ResponseEntity<TdbiBoardTypeDto>(tdbiBoardTypeService.retrieveTdbiBoardTypeByKey(tdbiBoardTypeDto), HttpStatus.OK);
    }

    @RequestMapping(value = "insertTdbiBoardType", method = RequestMethod.POST)
    public void insertTdbiBoardType(@RequestBody TdbiBoardTypeDto tdbiBoardTypeDto){
        tdbiBoardTypeService.insertTdbiBoardType(tdbiBoardTypeDto);
    }

}
