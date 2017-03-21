package kr.famos.com.service;


import kr.famos.com.dto.ComSettingsDto;
import kr.famos.com.mapper.SettingsMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class SettingsService {

    private static final Logger logger = LoggerFactory.getLogger(SettingsService.class);

    @Autowired
    SettingsMapper settingsMapper;

    public List<ComSettingsDto> retrieveSettings(ComSettingsDto comSettingsDto) {

        return settingsMapper.retrieveSettings(comSettingsDto);
    }

    public ComSettingsDto retrieveSettingsByKey(ComSettingsDto comSettingsDto) {

        return settingsMapper.retrieveSettingsByKey(comSettingsDto);
    }

    public void updateSettings(ComSettingsDto comSettingsDto) {
        settingsMapper.updateSettings(comSettingsDto);
    }


}
