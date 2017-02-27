package kr.famos.bets.yieldAnalysis.subbin.mapper;

import kr.famos.bets.yieldAnalysis.subbin.dto.SubBinDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Mapper
public interface SubBinMapper {

    List<SubBinDto> retrieveSubBin(SubBinDto subBinDto);
}
