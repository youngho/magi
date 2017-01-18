package kr.famos.home.controller;

import kr.famos.home.domain.Home;
import kr.famos.home.mapper.HomeMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by x on 2017. 1. 10..
 */
@RestController
public class HomeController {
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    HomeMapper homeMapper;

    @RequestMapping("/test/{name}")
    public Home home(
            @PathVariable String name) {
        Home home = homeMapper.readHome(name);
        logger.info(name + " 이것은 홈 컨트롤러 호출입니다");
        return home;
    }
}