package kr.famos.bets.basisInformation.lcVersionRegister.mapper;

import kr.famos.bets.basisInformation.lcVersionRegister.dto.LcVersionRegisterDto;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by yhkim on 2017-02-27.
 */
@Mapper
public interface LcVersionRegisterMapper {

//    public List<ProgramRegisterDto> retrieveProgramRegister(ProgramRegisterDto programRegisterDto);
//
//    public ProgramRegisterDto retrieveProgramRegisterByKey(ProgramRegisterDto programRegisterDto);

    public void insertLcVersionRegister(LcVersionRegisterDto lcVersionRegisterDto);

}
