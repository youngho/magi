package kr.famos.bets.rawData.mapper;

import kr.famos.bets.rawData.dto.RawDataDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Mapper
public interface RawDataMapper {

    public List<RawDataDto> retrieveRawData(RawDataDto rawDataDto);
}
