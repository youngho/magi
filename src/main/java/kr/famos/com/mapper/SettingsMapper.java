package kr.famos.com.mapper;

import kr.famos.com.dto.SettingsDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-09.
 */
@Mapper
public interface SettingsMapper {

    public List<SettingsDto> retrieveSettings(SettingsDto settingsDto);



}
