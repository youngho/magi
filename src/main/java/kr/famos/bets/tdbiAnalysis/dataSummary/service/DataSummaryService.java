package kr.famos.bets.tdbiAnalysis.dataSummary.service;

import kr.famos.bets.tdbiAnalysis.dataSummary.dto.DataSummaryDto;
import kr.famos.bets.tdbiAnalysis.dataSummary.mapper.DataSummaryMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class DataSummaryService {

    private static final Logger logger = LoggerFactory.getLogger(DataSummaryService.class);

    @Autowired
    DataSummaryMapper dataSummaryMapper;

    public List<DataSummaryDto> retrieveDataSummary(DataSummaryDto dataSummaryDto) {
        return dataSummaryMapper.retrieveDataSummary(dataSummaryDto);
    }


}
