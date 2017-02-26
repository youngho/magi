package kr.famos.com.web;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import java.io.IOException;

/**
 * Created by yhkim on 2017-02-26.
 */
@RestController
public class ResourcesController {
    @Autowired
    private ResourceLoader resourceLoader;

    @RequestMapping(value = "/get-resources", method = RequestMethod.GET)
    public String getResources() throws IOException {
        String content = IOUtils.toString(resourceLoader.getResource("classpath:test.txt").getInputStream());
        return "the content of resources:" + content;
    }
}
