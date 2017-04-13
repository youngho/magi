package kr.famos.bets.history.testProgramRevision.mapper;

import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionResultDto;
import kr.famos.bets.history.testProgramRevision.dto.ProgramRevisionRetrieveCondDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Mapper
public interface ProgramRevisionMapper {

    public List<ProgramRevisionResultDto> retrieveProgramRevision(ProgramRevisionRetrieveCondDto programRevisionRetrieveCondDto);
}
