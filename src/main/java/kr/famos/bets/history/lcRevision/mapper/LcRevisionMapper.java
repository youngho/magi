package kr.famos.bets.history.lcRevision.mapper;

import kr.famos.bets.history.lcRevision.dto.LcRevisionDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Mapper
public interface LcRevisionMapper {

    public List<LcRevisionDto> retrieveLcRevision(LcRevisionDto lcRevisionDto);
}
