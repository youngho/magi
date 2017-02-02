package kr.famos.base.web;

import kr.famos.base.domain.EquipmentLayout;
import kr.famos.base.mapper.EquipmentLayoutMapper;
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
public class EquipmentLayoutController {
    private static final Logger logger = LoggerFactory.getLogger(BibendworkController.class);
    @Autowired
    EquipmentLayoutMapper equipmentLayoutMapper;

    @RequestMapping(value="/equipmentLayout")
    public ResponseEntity<List<EquipmentLayout>> get() {
        logger.info(" 이것은 EquipmentLayoutController 호출입니다");
        List<EquipmentLayout> equipmentLayoutList = equipmentLayoutMapper.readAllEquipmentLayout();
        return new ResponseEntity<List<EquipmentLayout>>(equipmentLayoutList, HttpStatus.OK);
    }
}
