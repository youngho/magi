package kr.famos.com.mapper;

import kr.famos.com.dto.ComSettingsDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-09.
 */
@Mapper
public interface SettingsMapper {

    public List<ComSettingsDto> retrieveSettings(ComSettingsDto comSettingsDto);

    public ComSettingsDto retrieveSettingsByKey(ComSettingsDto comSettingsDto);

    public void updateSettings(ComSettingsDto comSettingsDto);

}
