package kr.famos.bets.basisInformation.testerIp.mapper;

import kr.famos.bets.basisInformation.testerIp.dto.TesterIpDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-21.
 */
@Mapper
public interface TesterIpMapper {

    List<TesterIpDto> retrieveTesterIp(TesterIpDto testerIpDto);

    TesterIpDto retrieveTesterIpByKey(TesterIpDto testerIpDto);

    void insertBadBlock(TesterIpDto testerIpDto);
}