package kr.famos.com.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by yhkim on 2017-02-20.
 */
@Controller
public class JspViewController {
    @RequestMapping(value="/")      // localhost
    public String root() {
        return "index";          // 실제 호출될 /WEB-INF/jsp/viewtest.jsp
    }

}
