package kr.famos.bets.yieldAnalysis.subbin.rest;

import kr.famos.bets.yieldAnalysis.subbin.dto.SubBinDto;
import kr.famos.bets.yieldAnalysis.subbin.service.SubBinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-02-27.
 */
@RestController
public class SubBinController {

    @Autowired
    SubBinService subBinService;

    @RequestMapping(value = "retrieveSubBin", method = RequestMethod.POST)
    public ResponseEntity<List<SubBinDto>> retrieveSubBin(SubBinDto subBinDto) {
        return new ResponseEntity<List<SubBinDto>>(subBinService.retrieveSubBin(subBinDto), HttpStatus.OK);
    }


    @RequestMapping(value = "retrieveSubBinJson", method = RequestMethod.POST)
    public
    @ResponseBody
    Map<String, Object> retrieveSubBinJson(SubBinDto subBinDto) {

        Map<String, Object> map = subBinService.retrieveSubBinJson2(subBinDto);
        return map;
    }
}
