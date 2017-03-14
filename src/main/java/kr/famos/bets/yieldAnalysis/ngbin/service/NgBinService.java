package kr.famos.bets.yieldAnalysis.ngbin.service;

import com.google.gson.Gson;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinDto;
import kr.famos.bets.yieldAnalysis.ngbin.dto.NgBinResultDto;
import kr.famos.bets.yieldAnalysis.ngbin.mapper.NgBinMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Created by yhkim on 2017-03-08.
 */
@Service
public class NgBinService {
    private static final Logger logger = LoggerFactory.getLogger(NgBinService.class);

    @Autowired
    NgBinMapper ngBinMapper;

    public List<NgBinDto> retireveNgBin(NgBinDto ngBinDto) {

        List<NgBinDto> ngBinDtoList = ngBinMapper.retrieveNgBin(ngBinDto);
        return ngBinDtoList;
    }

    public String retrieveNgBinMap(NgBinDto ngBinDto) {

        //ǥ���ؾ� �� NG_BIN����Ʈ�� ����� ���� NG_BIN_DTO�� LIST�ΰ� ����, MAP���� �������� Ư�� �ʵ带 �������� ����
        List<NgBinDto> lstNgBinDto = ngBinMapper.retrieveNgBinList(ngBinDto);
        //ngBin�� ","�� split�ؼ� Map�� key �� ���� put �ؼ� ǥ�� �ؾ� �� ngBin����Ʈ�� ���� ���� "" ����
        // ���� NG_BIN_DTO ������ ������ ���⼭ ������� ngBin����Ʈ�� �߰� �ϰ� ������ ������ ngbin�� key, value�� put�ϸ� ���� ���� "" �ִ� ���� value�� ġȯ�� ����
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
                    // ������ ���� ngBin����Ʈ�� �߰���
                    for(Map.Entry<Integer, String>entry2:mapNgBin.entrySet()){
                        String key2 = Integer.toString(entry2.getKey());
                        mapNgBinDtoRow.put("ngBin"+key2,"");
                    }
                    //���� �о�� ngBin���� put �ؼ� ġȯ ��
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

    public List<NgBinDto> retrieveNgBinList(NgBinDto ngBinDto) {

        List<NgBinDto> ngBinDtoList = ngBinMapper.retrieveNgBinList(ngBinDto);
        logger.debug("SubBinService - retrieveSubBin : " + ngBinDto.getTestCounter());

        return ngBinDtoList;
    }



//    public Map<String, Object> retrieveNgBinJson2(NgBinDto ngBinDto) {
//        List<NgBinDto> ngBinDtoList = ngBinMapper.retireveNgBin(ngBinDto);
//
//        logger.debug("NgBinService - retrieveNgBinJson2 : " + ngBinDtoList.get(0).getNgBin());
//
//        return null;
//    }
}
