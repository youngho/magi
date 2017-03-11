package kr.famos.bets.rawData.rest;

import kr.famos.bets.rawData.dto.RawDataDto;
import kr.famos.bets.rawData.service.RawDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLConnection;
import java.nio.charset.Charset;
import java.util.List;

/**
 * Created by yhkim on 2017-03-11.
 */
@RestController
public class RawDataController {

    private static final String INTERNAL_FILE="irregular-verbs-list.pdf";
    private static final String EXTERNAL_FILE_PATH="C:/mytemp/casi.txt";

    @Autowired
    RawDataService rawDataService;


    @RequestMapping(value = "/retrieveRawData", method = RequestMethod.POST)
    public ResponseEntity<List<RawDataDto>> retrieveRawData(@RequestBody RawDataDto rawDataDto){
        return new ResponseEntity<List<RawDataDto>>(rawDataService.retrieveRawData(rawDataDto), HttpStatus.OK);
    }

    /*
     * Download a file from
     *   - inside project, located in resources folder.
     *   - outside project, located in File system somewhere.
     */
    @RequestMapping(value="/download/{type}", method = RequestMethod.POST)
    public void downloadFile(HttpServletResponse response, @PathVariable("type") String type) throws IOException {

        File file = null;

        if(type.equalsIgnoreCase("internal")){
            ClassLoader classloader = Thread.currentThread().getContextClassLoader();
            file = new File(classloader.getResource(INTERNAL_FILE).getFile());
        }else{
            file = new File(EXTERNAL_FILE_PATH);
        }

        if(!file.exists()){
            String errorMessage = "Sorry. The file you are looking for does not exist";
            System.out.println(errorMessage);
            OutputStream outputStream = response.getOutputStream();
            outputStream.write(errorMessage.getBytes(Charset.forName("UTF-8")));
            outputStream.close();
            return;
        }

        String mimeType= URLConnection.guessContentTypeFromName(file.getName());
        if(mimeType==null){
            System.out.println("mimetype is not detectable, will take default");
            mimeType = "application/octet-stream";
        }

        System.out.println("mimetype : "+mimeType);

        response.setContentType(mimeType);

        /* "Content-Disposition : inline" will show viewable types [like images/text/pdf/anything viewable by browser] right on browser
            while others(zip e.g) will be directly downloaded [may provide save as popup, based on your browser setting.]*/
        response.setHeader("Content-Disposition", String.format("inline; filename=\"" + file.getName() +"\""));


        /* "Content-Disposition : attachment" will be directly download, may provide save as popup, based on your browser setting*/
        //response.setHeader("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getName()));

        response.setContentLength((int)file.length());

        InputStream inputStream = new BufferedInputStream(new FileInputStream(file));

        //Copy bytes from source to destination(outputstream in this example), closes both streams.
        FileCopyUtils.copy(inputStream, response.getOutputStream());
    }

}
