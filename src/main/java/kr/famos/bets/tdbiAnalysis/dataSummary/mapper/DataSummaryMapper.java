package kr.famos.bets.tdbiAnalysis.dataSummary.mapper;

import kr.famos.bets.tdbiAnalysis.dataSummary.dto.DataSummaryDto;
import kr.famos.bets.tdbiAnalysis.dataSummary.dto.DataSummaryResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Mapper
public interface DataSummaryMapper {

    public List<DataSummaryResultDto> retrieveDataSummary(DataSummaryDto dataSummaryDto);


}
