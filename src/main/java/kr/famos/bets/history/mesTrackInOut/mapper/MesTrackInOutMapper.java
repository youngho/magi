package kr.famos.bets.history.mesTrackInOut.mapper;

import kr.famos.bets.history.mesTrackInOut.dto.MesTrackInOutDto;
import kr.famos.bets.history.mesTrackInOut.dto.MesTrackInOutResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Mapper
public interface MesTrackInOutMapper {

    public List<MesTrackInOutResultDto> retrieveMesTrackInOut(MesTrackInOutDto mesTrackInOutDto);
}
