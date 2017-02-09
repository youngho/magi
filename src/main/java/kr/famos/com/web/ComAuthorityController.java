package kr.famos.com.web;

import kr.famos.base.web.TestYieldHistErrController;
import kr.famos.com.domain.ComAuthority;
import kr.famos.com.mapper.ComAuthorityMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by yhkim on 2017-02-09.
 */
@RestController
public class ComAuthorityController {
    private static final Logger logger = LoggerFactory.getLogger(TestYieldHistErrController.class);
    @Autowired
    ComAuthorityMapper comAuthorityMapper;

    @RequestMapping(value = "/authority")
    public ResponseEntity<List<ComAuthority>> get() {
        logger.debug(" 이것은 ComAuthority 컨트롤러 호출입니다");
        List<ComAuthority> list = comAuthorityMapper.readAllComAuthority();
        return new ResponseEntity<List<ComAuthority>>(list, HttpStatus.OK);
    }

    @RequestMapping(value = "/authority",method = RequestMethod.POST)
    public void post() {
        logger.debug("컨트롤러 Authority post 함수  ");
        ComAuthority comAuthority = new ComAuthority();
        comAuthority.setUser_nm("famos");
        comAuthorityMapper.insertComAuthority(comAuthority);
    }
}
