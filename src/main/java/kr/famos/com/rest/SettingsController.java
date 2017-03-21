package kr.famos.com.rest;

import kr.famos.com.dto.ComSettingsDto;
import kr.famos.com.service.SettingsService;
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
public class SettingsController {
    private static final Logger logger = LoggerFactory.getLogger(SettingsController.class);

    @Autowired
    SettingsService settingsService;

    @RequestMapping(value = "/retrieveSettings", method = RequestMethod.POST)
    public ResponseEntity<List<ComSettingsDto>> retrieveSettings(@RequestBody ComSettingsDto comSettingsDto) {

        logger.debug("UserController - retrieveRegister 메소드");

        return new ResponseEntity<List<ComSettingsDto>>(settingsService.retrieveSettings(comSettingsDto), HttpStatus.OK);
    }

    @RequestMapping(value = "/retrieveSettingsByKey", method = RequestMethod.POST)
    public ComSettingsDto retrieveSettingsByKey(@RequestBody ComSettingsDto comSettingsDto) {
        return settingsService.retrieveSettingsByKey(comSettingsDto);
    }

    @RequestMapping(value = "/updateSettings", method = RequestMethod.POST)
    public void updateSettings(@RequestBody ComSettingsDto comSettingsDto) {
        settingsService.updateSettings(comSettingsDto);
    }

}
