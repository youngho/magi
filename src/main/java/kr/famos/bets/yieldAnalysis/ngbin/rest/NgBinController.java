package kr.famos.bets.yieldAnalysis.ngbin.rest;

import com.google.gson.Gson;
import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import kr.famos.bets.yieldAnalysis.ngbin.mapper.NgBinMapper;
import kr.famos.bets.yieldAnalysis.ngbin.service.NgBinService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.nodes.MappingNode;

import java.util.*;

/**
 * Created by yhkim on 2017-03-08.
 */
@RestController
public class NgBinController {
    private static final Logger logger = LoggerFactory.getLogger(NgBinController.class);

    @Autowired
    private NgBinService ngBinService;
    @Autowired
    private  NgBinMapper ngBinMapper;

    @RequestMapping(value = "/retrieveNgBin", method = RequestMethod.POST)
    public ResponseEntity<List<NgBinDto>> retireveNgBin(@RequestBody NgBinDto ngBinDto) {
        logger.debug("NgBinController - retireveNgBin 메소드");

        return new ResponseEntity<List<NgBinDto>>(ngBinMapper.retrieveNgBin(ngBinDto), HttpStatus.OK);
    }

    @RequestMapping(value = "/retrieveNgBinJson", method = RequestMethod.POST)
    public ResponseEntity<String> retrieveSubBinJson(@RequestBody NgBinDto ngBinDto) {
        logger.debug("NgBinController - retireveNgBin 메소드");

        return new ResponseEntity<String>(ngBinService.retrieveNgBinMap(ngBinDto), HttpStatus.OK);
    }


//    @RequestMapping(value = "/retrieveNgBinJson2", method = RequestMethod.POST)
//    public
//    @ResponseBody
//    Map<String, Object> retrieveSubBinJson2(@RequestBody NgBinDto ngBinDto) {
//
//        Map<String, Object> map = ngBinService.retrieveNgBinJson2(ngBinDto);
//        return map;
//    }
}
