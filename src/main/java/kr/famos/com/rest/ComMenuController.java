package kr.famos.com.rest;

import kr.famos.com.dto.MenuGroupDto;
import kr.famos.com.dto.MenuItemDto;
import kr.famos.com.service.ComMenuService;
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
public class ComMenuController {
    private static final Logger logger = LoggerFactory.getLogger(ComMenuController.class);

    @Autowired
    ComMenuService comMenuService;

    @RequestMapping(value = "/retrieveNavigation", method = RequestMethod.POST)
    public ResponseEntity<List<MenuGroupDto>> retrieveNavigation(@RequestBody String authority) {

        logger.debug("ComMenuController - retrieveNavigation 메소드");

        return new ResponseEntity<List<MenuGroupDto>>(comMenuService.retrieveNavigation(authority), HttpStatus.OK);
    }

/*    @RequestMapping(value = "/insertComUserUsage", method = RequestMethod.POST)
    public void insertComUserUsage(@RequestBody ComUserUsageDto comUserUsageDto) {
        comUserUsageService.insertComUserUsage(comUserUsageDto);
    }*/

}
