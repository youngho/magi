package kr.famos.bets.history.testProgramRevision.mapper;

import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Mapper
public interface ProgramRevisionMapper {

    public List<ProgramRevisionDto> retrieveProgramRevision(ProgramRevisionDto programRevisionDto);
}
