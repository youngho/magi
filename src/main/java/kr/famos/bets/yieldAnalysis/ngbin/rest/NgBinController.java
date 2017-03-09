package kr.famos.bets.yieldAnalysis.ngbin.rest;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import kr.famos.bets.yieldAnalysis.ngbin.service.NgBinService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-03-08.
 */
@RestController
public class NgBinController {
    private static final Logger logger = LoggerFactory.getLogger(NgBinController.class);

    @Autowired
    private NgBinService ngBinService;

    @RequestMapping(value = "/retrieveNgBin", method = RequestMethod.POST)
    public ResponseEntity<List<NgBinDto>> retireveNgBin(@RequestBody NgBinDto ngBinDto) {
        logger.debug("NgBinController - retireveNgBin 메소드");

        return new ResponseEntity<List<NgBinDto>>(ngBinService.retireveNgBin(ngBinDto), HttpStatus.OK);
    }

    //    @RequestMapping(value = "/retrieveNgBinJson", method = RequestMethod.POST)
//    public @ResponseBody String retrieveSubBinJson(NgBinDto ngBinDto) {
//
//        String stringList = ngBinService.retrieveNgBinJson(ngBinDto);
//        return stringList;
//    }
    @RequestMapping(value = "/retrieveNgBinJson", method = RequestMethod.POST)
    public ResponseEntity<List<NgBinResultDto>> retrieveSubBinJson(NgBinDto ngBinDto) {

        //List<String> stringList = ngBinService.retrieveNgBinJson(ngBinDto);

        return new ResponseEntity<List<NgBinResultDto>>(ngBinService.retrieveNgBinJson(ngBinDto), HttpStatus.OK);


        //return ngBinService.retrieveNgBinJson(ngBinDto);
    }


    @RequestMapping(value = "/retrieveNgBinJson2", method = RequestMethod.POST)
    public
    @ResponseBody
    Map<String, Object> retrieveSubBinJson2(NgBinDto ngBinDto) {

        Map<String, Object> map = ngBinService.retrieveNgBinJson2(ngBinDto);
        return map;
    }
}
