package kr.famos.bets.web;

import kr.famos.bets.dao.EquipmentLayoutDao;
import kr.famos.bets.domain.EquipmentLayout;
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
    private static final Logger logger = LoggerFactory.getLogger(EquipmentLayoutController.class);
    @Autowired
    private EquipmentLayoutDao equipmentLayoutDao;

    @RequestMapping(value = "/equipmentLayout")
    public ResponseEntity<List<EquipmentLayout>> get() {
        logger.debug(" 이것은 EquipmentLayoutController 호출입니다");
        return new ResponseEntity<List<EquipmentLayout>>(equipmentLayoutDao.retrieveEquipmentLayout(), HttpStatus.OK);
    }
}
