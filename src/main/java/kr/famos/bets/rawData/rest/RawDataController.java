package kr.famos.bets.rawData.rest;

import kr.famos.bets.rawData.dto.RawDataResultDto;
import kr.famos.bets.rawData.dto.RawDataRetrieveCondDto;
import kr.famos.bets.rawData.service.RawDataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLConnection;
import java.nio.charset.Charset;
import java.util.List;

/**
 * BETS-UI-0701
 * Test RAW Data
 * Test 공정에서 발생한 RAW Data를 조회한다
 *
 * BETS-UI-0702
 * TDBI RAW Data
 * TDBI 공정에서 발생한 RAW Data를 조회한다
 *
 * 두 화면의 조회 테이블이 같고, 조회 파리미터의 값만 달라지기 때문에 같은 URL을 사용한다
 */
@RestController
public class RawDataController {

//    private static final String INTERNAL_FILE="irregular-verbs-list.pdf";
//    private static final String EXTERNAL_FILE_PATH="C:/mytemp/casi.txt";

    private static final Logger logger = LoggerFactory.getLogger(RawDataController.class);

    @Autowired
    RawDataService rawDataService;


    @RequestMapping(value = "/retrieveRawData", method = RequestMethod.POST)
    public ResponseEntity<List<RawDataResultDto>> retrieveRawData(@RequestBody RawDataRetrieveCondDto rawDataRetrieveCondDto){
        return new ResponseEntity<List<RawDataResultDto>>(rawDataService.retrieveRawData(rawDataRetrieveCondDto), HttpStatus.OK);
    }

    /*
     * Download a file from
     *   - inside project, located in resources folder.
     *   - outside project, located in File system somewhere.
     */
//    @RequestMapping(value="/download/{type}", method = RequestMethod.POST)
    @RequestMapping(value="/retrieveRawDataByKey", method = RequestMethod.POST)
    public void downloadFile(@RequestBody RawDataRetrieveCondDto rawDataRetrieveCondDto, HttpServletResponse response) throws IOException {

        File file = null;

//        if(type.equalsIgnoreCase("internal")){
//            ClassLoader classloader = Thread.currentThread().getContextClassLoader();
//            file = new File(classloader.getResource(INTERNAL_FILE).getFile());
//        }else{
//            file = new File(EXTERNAL_FILE_PATH);
//        }
        String strFilePath = rawDataRetrieveCondDto.getLocation() + "\\" + rawDataRetrieveCondDto.getFileName();
        logger.debug("FILE PATH : " + strFilePath);
        file = new File(strFilePath);

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
