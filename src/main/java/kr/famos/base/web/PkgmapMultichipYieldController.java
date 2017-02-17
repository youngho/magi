package kr.famos.base.web;

import kr.famos.base.dao.PkgmapMultichipYieldDao;
import kr.famos.base.domain.PkgmapMultichipYield;
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
public class PkgmapMultichipYieldController {
    private static final Logger logger = LoggerFactory.getLogger(PkgmapMultichipYieldController.class);
    @Autowired
    private PkgmapMultichipYieldDao pkgmapMultichipYieldDao;

    @RequestMapping(value = "/pkgmapmultichipyield")
    public ResponseEntity<List<PkgmapMultichipYield>> get() {
        logger.debug("PkgmapMultichipYieldController 컨트롤러 호출입니다");
        return new ResponseEntity<List<PkgmapMultichipYield>>(pkgmapMultichipYieldDao.retrievePkgmapMultichipYield(), HttpStatus.OK);
    }
}
