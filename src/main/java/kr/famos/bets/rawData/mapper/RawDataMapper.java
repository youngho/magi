package kr.famos.bets.rawData.mapper;

import kr.famos.bets.rawData.dto.RawDataResultDto;
import kr.famos.bets.rawData.dto.RawDataRetrieveCondDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Mapper
public interface RawDataMapper {

    public List<RawDataResultDto> retrieveRawData(RawDataRetrieveCondDto rawDataResultDto);
}
