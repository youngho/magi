package kr.famos.bets.web;

import kr.famos.bets.dao.MbtEquipmentInfoDao;
import kr.famos.bets.domain.MbtEquipmentInfo;
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
public class MbtEquipmentInfoController {
    private static final Logger logger = LoggerFactory.getLogger(MbtEquipmentInfoController.class);
    @Autowired
    private MbtEquipmentInfoDao mbtEquipmentInfoDao;

    @RequestMapping(value = "/MbtEquipmentInfo")
    public ResponseEntity<List<MbtEquipmentInfo>> get() {
        logger.debug(" 이것은 MbtEquipmentInfoController 컨트롤러 호출입니다");
        return new ResponseEntity<List<MbtEquipmentInfo>>(mbtEquipmentInfoDao.retrieveMbtEquipmentInfo(), HttpStatus.OK);
    }
}
