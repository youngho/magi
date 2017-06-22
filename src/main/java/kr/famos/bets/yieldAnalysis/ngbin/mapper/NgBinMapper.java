package kr.famos.bets.yieldAnalysis.ngbin.mapper;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinCondDto;

import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Created by yhkim on 2017-03-08.
 */
@Mapper
public interface NgBinMapper {
    public List<Map<String,NgBinResultDto>> retrieveNgBinMap(NgBinCondDto ngBinCondDto);
    public List<NgBinResultDto> retrieveNgBinList(NgBinCondDto ngBinCondDto);
}
