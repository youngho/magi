package kr.famos.bets.history.mesTrackInOut.rest;

import kr.famos.bets.history.mesTrackInOut.dto.MesTrackInOutDto;
import kr.famos.bets.history.mesTrackInOut.service.MesTrackInOutService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@RestController
public class MesTrackInOutController {
    private static final Logger logger = LoggerFactory.getLogger(MesTrackInOutController.class);

    @Autowired
    MesTrackInOutService mesTrackInOutService;

    @RequestMapping(value = "/retrieveMesTrackInOut", method = RequestMethod.POST)
    public ResponseEntity<List<MesTrackInOutDto>> retrieveMesTrackInOut(@RequestBody MesTrackInOutDto mesTrackInOutDto) {

        return new ResponseEntity<List<MesTrackInOutDto>>(mesTrackInOutService.retrieveMesTrackInOut(mesTrackInOutDto), HttpStatus.OK);
    }

}
