package kr.famos.base.web;

import kr.famos.base.domain.MbtEquipmentInfo;
import kr.famos.base.mapper.MbtEquipmentInfoMapper;
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
    MbtEquipmentInfoMapper mbtEquipmentInfoMapper;

    @RequestMapping(value="/MbtEquipmentInfo")
    public ResponseEntity<List<MbtEquipmentInfo>> get() {
        logger.info(" 이것은 MbtEquipmentInfoController 컨트롤러 호출입니다");
        List<MbtEquipmentInfo> mbtEquipmentInfoList = mbtEquipmentInfoMapper.readAllMbtEquipmentInfo();
        return new ResponseEntity<List<MbtEquipmentInfo>>(mbtEquipmentInfoList, HttpStatus.OK);
    }
}
