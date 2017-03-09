package kr.famos.bets.yieldAnalysis.ngbin.mapper;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-08.
 */
@Mapper
public interface NgBinMapper {
    public List<NgBinDto> retireveNgBin(NgBinDto ngBinDto);

    public List<NgBinDto> retireveNgBinJson(NgBinDto ngBinDto);
}
