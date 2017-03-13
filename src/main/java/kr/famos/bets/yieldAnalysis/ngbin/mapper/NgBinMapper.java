package kr.famos.bets.yieldAnalysis.ngbin.mapper;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-03-08.
 */
@Mapper
public interface NgBinMapper {
    public List<NgBinDto> retrieveNgBin(NgBinDto ngBinDto);

    public List<Map<String,NgBinDto>> retrieveNgBinMap(NgBinDto ngBinDto);

    public List<NgBinDto> retrieveNgBinList(NgBinDto ngBinDto);
}
