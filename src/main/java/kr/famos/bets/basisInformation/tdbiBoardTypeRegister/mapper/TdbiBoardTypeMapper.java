package kr.famos.bets.basisInformation.tdbiBoardTypeRegister.mapper;

import kr.famos.bets.basisInformation.tdbiBoardTypeRegister.dto.TdbiBoardTypeDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Mapper
public interface TdbiBoardTypeMapper {

    List<TdbiBoardTypeDto>retrieveTdbiBoardType(TdbiBoardTypeDto tdbiBoardTypeDto);

    void insertTdbiBoardType(TdbiBoardTypeDto tdbiBoardTypeDto);

}
