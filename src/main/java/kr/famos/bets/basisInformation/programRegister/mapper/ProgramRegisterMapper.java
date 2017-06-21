package kr.famos.bets.basisInformation.programRegister.mapper;

import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterDto;
import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Mapper
public interface ProgramRegisterMapper {

    public List<ProgramRegisterResultDto> retrieveProgramRegister(ProgramRegisterDto programRegisterDto);

    public ProgramRegisterDto retrieveProgramRegisterByKey(ProgramRegisterDto programRegisterDto);

    public void insertProgramRegister(ProgramRegisterDto programRegisterDto);

}
