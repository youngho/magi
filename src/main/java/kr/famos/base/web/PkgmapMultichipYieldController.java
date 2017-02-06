package kr.famos.base.web;

import kr.famos.base.domain.PkgmapMultichipYield;
import kr.famos.base.mapper.PkgmapMultichipYieldMapper;
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
    PkgmapMultichipYieldMapper pkgmapMultichipYieldMapper;

    @RequestMapping(value="/pkgmapmultichipyield")
    public ResponseEntity<List<PkgmapMultichipYield>> get() {
        logger.debug(" 이것은 PkgmapMultichipYieldController 컨트롤러 호출입니다");
        List<PkgmapMultichipYield> list = pkgmapMultichipYieldMapper.readAllPkgmapMultichipYield();
        return new ResponseEntity<List<PkgmapMultichipYield>>(list, HttpStatus.OK);
    }
}
