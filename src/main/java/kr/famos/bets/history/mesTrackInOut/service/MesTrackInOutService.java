package kr.famos.bets.history.mesTrackInOut.service;

import kr.famos.bets.history.mesTrackInOut.dto.MesTrackInOutDto;
import kr.famos.bets.history.mesTrackInOut.dto.MesTrackInOutResultDto;
import kr.famos.bets.history.mesTrackInOut.mapper.MesTrackInOutMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@Service
public class MesTrackInOutService {
    private static final Logger logger = LoggerFactory.getLogger(MesTrackInOutService.class);

    @Autowired
    MesTrackInOutMapper mesTrackInOutMapper;

    public List<MesTrackInOutResultDto> retrieveMesTrackInOut(MesTrackInOutDto mesTrackInOutDto) {

        return mesTrackInOutMapper.retrieveMesTrackInOut(mesTrackInOutDto);
    }


}
