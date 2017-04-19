package kr.famos.com.rest;

import kr.famos.com.dto.ComSettingsDto;
import kr.famos.com.dto.ComUserUsageCondDto;
import kr.famos.com.dto.ComUserUsageDto;
import kr.famos.com.service.ComUserUsageService;
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
public class ComUserUsageController {
    private static final Logger logger = LoggerFactory.getLogger(ComUserUsageController.class);

    @Autowired
    ComUserUsageService comUserUsageService;

    @RequestMapping(value = "/retrieveComUserUsage", method = RequestMethod.POST)
    public ResponseEntity<List<ComUserUsageDto>> retrieveComUserUsage(@RequestBody ComUserUsageCondDto comUserUsageDto) {

        logger.debug("ComUserUsageController - retrieveComUserUsage 메소드");

        return new ResponseEntity<List<ComUserUsageDto>>(comUserUsageService.retrieveComUserUsage(comUserUsageDto), HttpStatus.OK);
    }

    @RequestMapping(value = "/insertComUserUsage", method = RequestMethod.POST)
    public void insertComUserUsage(@RequestBody ComUserUsageDto comUserUsageDto) {
        comUserUsageService.insertComUserUsage(comUserUsageDto);
    }

}
