package kr.famos.bets.yieldAnalysis.ngbin.rest;

import com.google.gson.Gson;
import kr.famos.bets.basisInformation.programRegister.dto.ProgramRegisterDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import kr.famos.bets.yieldAnalysis.ngbin.mapper.NgBinMapper;
import kr.famos.bets.yieldAnalysis.ngbin.service.NgBinService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.yaml.snakeyaml.nodes.MappingNode;

import java.util.*;

/**
 * Created by yhkim on 2017-03-08.
 */
@RestController
public class NgBinController {
    private static final Logger logger = LoggerFactory.getLogger(NgBinController.class);

    @Autowired
    private NgBinService ngBinService;
    @Autowired
    private  NgBinMapper ngBinMapper;

    @RequestMapping(value = "/retrieveNgBin", method = RequestMethod.POST)
    public ResponseEntity<List<NgBinDto>> retireveNgBin(@RequestBody NgBinDto ngBinDto) {
        logger.debug("NgBinController - retireveNgBin 메소드");

        return new ResponseEntity<List<NgBinDto>>(ngBinMapper.retrieveNgBin(ngBinDto), HttpStatus.OK);
    }

    @RequestMapping(value = "/retrieveNgBinJson", method = RequestMethod.POST)
    public String retrieveSubBinJson(@RequestBody NgBinDto ngBinDto) {

        //표현해야 할 NG_BIN리스트를 만들기 위해 NG_BIN_DTO를 LIST로가 져옴, MAP으로 가져오면 특정 필드를 꺼내오기 힘듬
        List<NgBinDto> lstNgBinDto = ngBinMapper.retrieveNgBinList(ngBinDto);
        //ngBin을 ","로 split해서 Map에 key 를 누적 put 해서 표현 해야 할 ngBin리스트를 만듬 값은 "" 없음
        // 추후 NG_BIN_DTO 맴으로 가져와 여기서 만들어진 ngBin리스트를 추가 하고 맵으로 가져온 ngbin을 key, value로 put하면 없는 값은 "" 있는 값은 value로 치환될 것임
        Map<Integer,String> mapNgBin = new TreeMap<>();
        for(NgBinDto bin : lstNgBinDto){
            String strBin = bin.getNgBin();
            String[] arrayBin = strBin.split(",");
            for(int i=0; i < arrayBin.length-2 ;i=i+2){
                mapNgBin.put(Integer.parseInt(arrayBin[i]),"");
            }
        }



        List<Map<String,NgBinDto>> mapNgBinDto = ngBinMapper.retrieveNgBinMap(ngBinDto);
        List ArrayNgBinDto = new ArrayList();
        int index;
        for( Map<String,NgBinDto> map :mapNgBinDto){
            Map<String,String> mapNgBinDtoRow = new LinkedHashMap<String, String>();
            for(Map.Entry<String, NgBinDto>entry:map.entrySet()){
                String key = entry.getKey();
                String value = String.valueOf(entry.getValue());
                if(key.equals("NG_BIN")){
                    // 위에서 만든 ngBin리스트를 추가합
                    for(Map.Entry<Integer, String>entry2:mapNgBin.entrySet()){
                        String key2 = Integer.toString(entry2.getKey());
                        mapNgBinDtoRow.put("ngBin"+key2,"");
                    }
                    //지금 읽어온 ngBin값을 put 해서 치환 함
                    String[] strBin = value.split(",");
                    for(int i=0; i < strBin.length-2 ;i=i+2){
                        mapNgBinDtoRow.put("ngBin"+strBin[i],strBin[i+1]);
                    }

                }else{
                    mapNgBinDtoRow.put(key,value);
                }

            }
            ArrayNgBinDto.add(mapNgBinDtoRow);
            mapNgBinDtoRow=null;
        }

        Gson gson = new Gson();

        String  strJsonNgBinDto = gson.toJson(ArrayNgBinDto);
//        String test = "[{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa5" + "\"" + "}" + "," + "{" + "\"" + "Lotid" + "\"" + ":" + "\"" + "fdsafdsafdsa2" + "\"" + "}]";
        if (ArrayNgBinDto.size() == 0){
            strJsonNgBinDto =  "[{" + "\"" + "Message" + "\"" + ":" + "\"" + "no data" + "\"" + "}]";
        }

        return strJsonNgBinDto;
    }


//    @RequestMapping(value = "/retrieveNgBinJson2", method = RequestMethod.POST)
//    public
//    @ResponseBody
//    Map<String, Object> retrieveSubBinJson2(@RequestBody NgBinDto ngBinDto) {
//
//        Map<String, Object> map = ngBinService.retrieveNgBinJson2(ngBinDto);
//        return map;
//    }
}
