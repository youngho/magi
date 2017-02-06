package kr.famos.base.web;

import kr.famos.base.domain.MbtBoardYieldHist;
import kr.famos.base.mapper.MbtBoardYieldHistMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@RestController
public class MbtBoardYieldHistController {
    private static final Logger logger = LoggerFactory.getLogger(MbtBoardYieldHistController.class);
    @Autowired
    MbtBoardYieldHistMapper mbtBoardYieldHistMapper;

    @RequestMapping(value="/mbtboardyieldhist")
    public ResponseEntity<List<MbtBoardYieldHist>> get() {
        logger.info(" 이것은 MbtBoardYieldHistController 컨트롤러 호출입니다");
        List<MbtBoardYieldHist> mbtBoardYieldHistList = mbtBoardYieldHistMapper.readAllMbtBoardYieldHist();
        return new ResponseEntity<List<MbtBoardYieldHist>>(mbtBoardYieldHistList, HttpStatus.OK);
    }
}
