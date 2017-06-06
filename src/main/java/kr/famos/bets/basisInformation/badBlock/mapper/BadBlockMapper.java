package kr.famos.bets.basisInformation.badBlock.mapper;

import kr.famos.bets.basisInformation.badBlock.dto.BadBlockDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Mapper
public interface BadBlockMapper {

    List<BadBlockDto>retrieveBadBlock(BadBlockDto badBlockDto);

    BadBlockDto retrieveBadBlockByKey(BadBlockDto badBlockDto);

    void insertBadBlock(BadBlockDto badBlockDto);

}
