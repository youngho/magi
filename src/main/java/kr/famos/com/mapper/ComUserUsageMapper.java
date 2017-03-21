package kr.famos.com.mapper;

import kr.famos.com.dto.ComUserUsageDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-09.
 */
@Mapper
public interface ComUserUsageMapper {

    public List<ComUserUsageDto> retrieveComUserUsage(ComUserUsageDto comUserUsageDto);

    public void insertComUserUsage(ComUserUsageDto comUserUsageDto);

}
