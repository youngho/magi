package kr.famos.bets.dutmap.singledut.service;

import kr.famos.bets.dutmap.singledut.dto.SingleDutMapDto;
import kr.famos.bets.dutmap.singledut.dto.SingleDutMapResultDto;
import kr.famos.bets.dutmap.singledut.mapper.SingleDutMapMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-09.
 */
@Service
public class SingleDutMapService {
    private static final Logger logger = LoggerFactory.getLogger(SingleDutMapService.class);
    @Autowired
    SingleDutMapMapper singleDutMapMapper;

    public List<SingleDutMapResultDto> retrieveSingleDutMap(SingleDutMapDto singleDutMapDto){
        List<SingleDutMapDto> singleDutMapDtoList = singleDutMapMapper.retrieveSingleDutMap(singleDutMapDto);

        List<SingleDutMapResultDto> singleDutMapResultDtoList = new ArrayList<>();

        //쿼리에서 받아온 리스트를 반복하며 Result에 add한다.
        for (SingleDutMapDto list : singleDutMapDtoList){
            SingleDutMapResultDto singleDutMapResultDto = new SingleDutMapResultDto();

            singleDutMapResultDto.setPartNumber(list.getPartNumber());
            singleDutMapResultDto.setOperatorId(list.getOperatorId());
            singleDutMapResultDto.setLotId(list.getLotId());
//            ngBinResultDto.setLotInTime(list.getLotInTime());
//            ngBinResultDto.setEndTime(list.getEndTime());
            singleDutMapResultDto.setProcessCode(list.getProcessCode());
            singleDutMapResultDto.setTesterModel(list.getTesterModel());
            singleDutMapResultDto.setTesterNumber(list.getTesterNumber());
            singleDutMapResultDto.setHead(list.getHead());
            singleDutMapResultDto.setTestCounter(list.getTestCounter());
            singleDutMapResultDto.setHandlerModel(list.getHandlerModel());
            singleDutMapResultDto.setBoardId(list.getBoardId());

            //DUT_MAIN_BIN분리
            String strTemp = list.getDutMainBin();
            String strDutMain = strTemp.replaceAll(",","");
//            logger.debug("DUT_MAIN_BIN 콤마 제거후" + strDutMain);
            // 한 글자씩 화면에 출력
            for (int i = 0; i < strDutMain.length(); i++) {
//                System.out.println( strDutMain.charAt(i) );
                if (i == 0){singleDutMapResultDto.setSocket1(Character.toString(strDutMain.charAt(i)));}
                if (i == 1){singleDutMapResultDto.setSocket2(Character.toString(strDutMain.charAt(i)));}
                if (i == 2){singleDutMapResultDto.setSocket3(Character.toString(strDutMain.charAt(i)));}
                if (i == 3){singleDutMapResultDto.setSocket4(Character.toString(strDutMain.charAt(i)));}
                if (i == 4){singleDutMapResultDto.setSocket5(Character.toString(strDutMain.charAt(i)));}
                if (i == 5){singleDutMapResultDto.setSocket6(Character.toString(strDutMain.charAt(i)));}
                if (i == 6){singleDutMapResultDto.setSocket7(Character.toString(strDutMain.charAt(i)));}
                if (i == 7){singleDutMapResultDto.setSocket8(Character.toString(strDutMain.charAt(i)));}
                if (i == 8){singleDutMapResultDto.setSocket9(Character.toString(strDutMain.charAt(i)));}
                if (i == 9){singleDutMapResultDto.setSocket10(Character.toString(strDutMain.charAt(i)));}
                if (i == 10){singleDutMapResultDto.setSocket11(Character.toString(strDutMain.charAt(i)));}
                if (i == 11){singleDutMapResultDto.setSocket12(Character.toString(strDutMain.charAt(i)));}
                if (i == 12){singleDutMapResultDto.setSocket13(Character.toString(strDutMain.charAt(i)));}
                if (i == 13){singleDutMapResultDto.setSocket14(Character.toString(strDutMain.charAt(i)));}
                if (i == 14){singleDutMapResultDto.setSocket15(Character.toString(strDutMain.charAt(i)));}
                if (i == 15){singleDutMapResultDto.setSocket16(Character.toString(strDutMain.charAt(i)));}
                if (i == 16){singleDutMapResultDto.setSocket17(Character.toString(strDutMain.charAt(i)));}
                if (i == 17){singleDutMapResultDto.setSocket18(Character.toString(strDutMain.charAt(i)));}
                if (i == 18){singleDutMapResultDto.setSocket19(Character.toString(strDutMain.charAt(i)));}
                if (i == 19){singleDutMapResultDto.setSocket20(Character.toString(strDutMain.charAt(i)));}
                if (i == 20){singleDutMapResultDto.setSocket21(Character.toString(strDutMain.charAt(i)));}
                if (i == 21){singleDutMapResultDto.setSocket22(Character.toString(strDutMain.charAt(i)));}
                if (i == 22){singleDutMapResultDto.setSocket23(Character.toString(strDutMain.charAt(i)));}
                if (i == 23){singleDutMapResultDto.setSocket24(Character.toString(strDutMain.charAt(i)));}
                if (i == 24){singleDutMapResultDto.setSocket25(Character.toString(strDutMain.charAt(i)));}
                if (i == 25){singleDutMapResultDto.setSocket26(Character.toString(strDutMain.charAt(i)));}
                if (i == 26){singleDutMapResultDto.setSocket27(Character.toString(strDutMain.charAt(i)));}
                if (i == 27){singleDutMapResultDto.setSocket28(Character.toString(strDutMain.charAt(i)));}
                if (i == 28){singleDutMapResultDto.setSocket29(Character.toString(strDutMain.charAt(i)));}
                if (i == 29){singleDutMapResultDto.setSocket30(Character.toString(strDutMain.charAt(i)));}
                if (i == 30){singleDutMapResultDto.setSocket31(Character.toString(strDutMain.charAt(i)));}
                if (i == 31){singleDutMapResultDto.setSocket32(Character.toString(strDutMain.charAt(i)));}
                if (i == 32){singleDutMapResultDto.setSocket33(Character.toString(strDutMain.charAt(i)));}
                if (i == 33){singleDutMapResultDto.setSocket34(Character.toString(strDutMain.charAt(i)));}
                if (i == 34){singleDutMapResultDto.setSocket35(Character.toString(strDutMain.charAt(i)));}
                if (i == 35){singleDutMapResultDto.setSocket36(Character.toString(strDutMain.charAt(i)));}
                if (i == 36){singleDutMapResultDto.setSocket37(Character.toString(strDutMain.charAt(i)));}
                if (i == 37){singleDutMapResultDto.setSocket38(Character.toString(strDutMain.charAt(i)));}
                if (i == 38){singleDutMapResultDto.setSocket39(Character.toString(strDutMain.charAt(i)));}
                if (i == 39){singleDutMapResultDto.setSocket40(Character.toString(strDutMain.charAt(i)));}
                if (i == 40){singleDutMapResultDto.setSocket41(Character.toString(strDutMain.charAt(i)));}
                if (i == 41){singleDutMapResultDto.setSocket42(Character.toString(strDutMain.charAt(i)));}
                if (i == 42){singleDutMapResultDto.setSocket43(Character.toString(strDutMain.charAt(i)));}
                if (i == 43){singleDutMapResultDto.setSocket44(Character.toString(strDutMain.charAt(i)));}
                if (i == 44){singleDutMapResultDto.setSocket45(Character.toString(strDutMain.charAt(i)));}
                if (i == 45){singleDutMapResultDto.setSocket46(Character.toString(strDutMain.charAt(i)));}
                if (i == 46){singleDutMapResultDto.setSocket47(Character.toString(strDutMain.charAt(i)));}
                if (i == 47){singleDutMapResultDto.setSocket48(Character.toString(strDutMain.charAt(i)));}
                if (i == 48){singleDutMapResultDto.setSocket49(Character.toString(strDutMain.charAt(i)));}
                if (i == 49){singleDutMapResultDto.setSocket50(Character.toString(strDutMain.charAt(i)));}
                if (i == 50){singleDutMapResultDto.setSocket51(Character.toString(strDutMain.charAt(i)));}
                if (i == 51){singleDutMapResultDto.setSocket52(Character.toString(strDutMain.charAt(i)));}
                if (i == 52){singleDutMapResultDto.setSocket53(Character.toString(strDutMain.charAt(i)));}
                if (i == 53){singleDutMapResultDto.setSocket54(Character.toString(strDutMain.charAt(i)));}
                if (i == 54){singleDutMapResultDto.setSocket55(Character.toString(strDutMain.charAt(i)));}
                if (i == 55){singleDutMapResultDto.setSocket56(Character.toString(strDutMain.charAt(i)));}
                if (i == 56){singleDutMapResultDto.setSocket57(Character.toString(strDutMain.charAt(i)));}
                if (i == 57){singleDutMapResultDto.setSocket58(Character.toString(strDutMain.charAt(i)));}
                if (i == 58){singleDutMapResultDto.setSocket59(Character.toString(strDutMain.charAt(i)));}
                if (i == 59){singleDutMapResultDto.setSocket60(Character.toString(strDutMain.charAt(i)));}
                if (i == 60){singleDutMapResultDto.setSocket61(Character.toString(strDutMain.charAt(i)));}
                if (i == 61){singleDutMapResultDto.setSocket62(Character.toString(strDutMain.charAt(i)));}
                if (i == 62){singleDutMapResultDto.setSocket63(Character.toString(strDutMain.charAt(i)));}
                if (i == 63){singleDutMapResultDto.setSocket64(Character.toString(strDutMain.charAt(i)));}
                if (i == 64){singleDutMapResultDto.setSocket65(Character.toString(strDutMain.charAt(i)));}
                if (i == 65){singleDutMapResultDto.setSocket66(Character.toString(strDutMain.charAt(i)));}
                if (i == 66){singleDutMapResultDto.setSocket67(Character.toString(strDutMain.charAt(i)));}
                if (i == 67){singleDutMapResultDto.setSocket68(Character.toString(strDutMain.charAt(i)));}
                if (i == 68){singleDutMapResultDto.setSocket69(Character.toString(strDutMain.charAt(i)));}
                if (i == 69){singleDutMapResultDto.setSocket70(Character.toString(strDutMain.charAt(i)));}
                if (i == 70){singleDutMapResultDto.setSocket71(Character.toString(strDutMain.charAt(i)));}
                if (i == 71){singleDutMapResultDto.setSocket72(Character.toString(strDutMain.charAt(i)));}
                if (i == 72){singleDutMapResultDto.setSocket73(Character.toString(strDutMain.charAt(i)));}
                if (i == 73){singleDutMapResultDto.setSocket74(Character.toString(strDutMain.charAt(i)));}
                if (i == 74){singleDutMapResultDto.setSocket75(Character.toString(strDutMain.charAt(i)));}
                if (i == 75){singleDutMapResultDto.setSocket76(Character.toString(strDutMain.charAt(i)));}
                if (i == 76){singleDutMapResultDto.setSocket77(Character.toString(strDutMain.charAt(i)));}
                if (i == 77){singleDutMapResultDto.setSocket78(Character.toString(strDutMain.charAt(i)));}
                if (i == 78){singleDutMapResultDto.setSocket79(Character.toString(strDutMain.charAt(i)));}
                if (i == 79){singleDutMapResultDto.setSocket80(Character.toString(strDutMain.charAt(i)));}
                if (i == 80){singleDutMapResultDto.setSocket81(Character.toString(strDutMain.charAt(i)));}
                if (i == 81){singleDutMapResultDto.setSocket82(Character.toString(strDutMain.charAt(i)));}
                if (i == 82){singleDutMapResultDto.setSocket83(Character.toString(strDutMain.charAt(i)));}
                if (i == 83){singleDutMapResultDto.setSocket84(Character.toString(strDutMain.charAt(i)));}
                if (i == 84){singleDutMapResultDto.setSocket85(Character.toString(strDutMain.charAt(i)));}
                if (i == 85){singleDutMapResultDto.setSocket86(Character.toString(strDutMain.charAt(i)));}
                if (i == 86){singleDutMapResultDto.setSocket87(Character.toString(strDutMain.charAt(i)));}
                if (i == 87){singleDutMapResultDto.setSocket88(Character.toString(strDutMain.charAt(i)));}
                if (i == 88){singleDutMapResultDto.setSocket89(Character.toString(strDutMain.charAt(i)));}
                if (i == 89){singleDutMapResultDto.setSocket90(Character.toString(strDutMain.charAt(i)));}
                if (i == 90){singleDutMapResultDto.setSocket91(Character.toString(strDutMain.charAt(i)));}
                if (i == 91){singleDutMapResultDto.setSocket92(Character.toString(strDutMain.charAt(i)));}
                if (i == 92){singleDutMapResultDto.setSocket93(Character.toString(strDutMain.charAt(i)));}
                if (i == 93){singleDutMapResultDto.setSocket94(Character.toString(strDutMain.charAt(i)));}
                if (i == 94){singleDutMapResultDto.setSocket95(Character.toString(strDutMain.charAt(i)));}
                if (i == 95){singleDutMapResultDto.setSocket96(Character.toString(strDutMain.charAt(i)));}
                if (i == 96){singleDutMapResultDto.setSocket97(Character.toString(strDutMain.charAt(i)));}
                if (i == 97){singleDutMapResultDto.setSocket98(Character.toString(strDutMain.charAt(i)));}
                if (i == 98){singleDutMapResultDto.setSocket99(Character.toString(strDutMain.charAt(i)));}
                if (i == 99){singleDutMapResultDto.setSocket100(Character.toString(strDutMain.charAt(i)));}
                if (i == 100){singleDutMapResultDto.setSocket101(Character.toString(strDutMain.charAt(i)));}
                if (i == 101){singleDutMapResultDto.setSocket102(Character.toString(strDutMain.charAt(i)));}
                if (i == 102){singleDutMapResultDto.setSocket103(Character.toString(strDutMain.charAt(i)));}
                if (i == 103){singleDutMapResultDto.setSocket104(Character.toString(strDutMain.charAt(i)));}
                if (i == 104){singleDutMapResultDto.setSocket105(Character.toString(strDutMain.charAt(i)));}
                if (i == 105){singleDutMapResultDto.setSocket106(Character.toString(strDutMain.charAt(i)));}
                if (i == 106){singleDutMapResultDto.setSocket107(Character.toString(strDutMain.charAt(i)));}
                if (i == 107){singleDutMapResultDto.setSocket108(Character.toString(strDutMain.charAt(i)));}
                if (i == 108){singleDutMapResultDto.setSocket109(Character.toString(strDutMain.charAt(i)));}
                if (i == 109){singleDutMapResultDto.setSocket110(Character.toString(strDutMain.charAt(i)));}
                if (i == 110){singleDutMapResultDto.setSocket111(Character.toString(strDutMain.charAt(i)));}
                if (i == 111){singleDutMapResultDto.setSocket112(Character.toString(strDutMain.charAt(i)));}
                if (i == 112){singleDutMapResultDto.setSocket113(Character.toString(strDutMain.charAt(i)));}
                if (i == 113){singleDutMapResultDto.setSocket114(Character.toString(strDutMain.charAt(i)));}
                if (i == 114){singleDutMapResultDto.setSocket115(Character.toString(strDutMain.charAt(i)));}
                if (i == 115){singleDutMapResultDto.setSocket116(Character.toString(strDutMain.charAt(i)));}
                if (i == 116){singleDutMapResultDto.setSocket117(Character.toString(strDutMain.charAt(i)));}
                if (i == 117){singleDutMapResultDto.setSocket118(Character.toString(strDutMain.charAt(i)));}
                if (i == 118){singleDutMapResultDto.setSocket119(Character.toString(strDutMain.charAt(i)));}
                if (i == 119){singleDutMapResultDto.setSocket120(Character.toString(strDutMain.charAt(i)));}
                if (i == 120){singleDutMapResultDto.setSocket121(Character.toString(strDutMain.charAt(i)));}
                if (i == 121){singleDutMapResultDto.setSocket122(Character.toString(strDutMain.charAt(i)));}
                if (i == 122){singleDutMapResultDto.setSocket123(Character.toString(strDutMain.charAt(i)));}
                if (i == 123){singleDutMapResultDto.setSocket124(Character.toString(strDutMain.charAt(i)));}
                if (i == 124){singleDutMapResultDto.setSocket125(Character.toString(strDutMain.charAt(i)));}
                if (i == 125){singleDutMapResultDto.setSocket126(Character.toString(strDutMain.charAt(i)));}
                if (i == 126){singleDutMapResultDto.setSocket127(Character.toString(strDutMain.charAt(i)));}
                if (i == 127){singleDutMapResultDto.setSocket128(Character.toString(strDutMain.charAt(i)));}
                if (i == 128){singleDutMapResultDto.setSocket129(Character.toString(strDutMain.charAt(i)));}
                if (i == 129){singleDutMapResultDto.setSocket130(Character.toString(strDutMain.charAt(i)));}
                if (i == 130){singleDutMapResultDto.setSocket131(Character.toString(strDutMain.charAt(i)));}
                if (i == 131){singleDutMapResultDto.setSocket132(Character.toString(strDutMain.charAt(i)));}
                if (i == 132){singleDutMapResultDto.setSocket133(Character.toString(strDutMain.charAt(i)));}
                if (i == 133){singleDutMapResultDto.setSocket134(Character.toString(strDutMain.charAt(i)));}
                if (i == 134){singleDutMapResultDto.setSocket135(Character.toString(strDutMain.charAt(i)));}
                if (i == 135){singleDutMapResultDto.setSocket136(Character.toString(strDutMain.charAt(i)));}
                if (i == 136){singleDutMapResultDto.setSocket137(Character.toString(strDutMain.charAt(i)));}
                if (i == 137){singleDutMapResultDto.setSocket138(Character.toString(strDutMain.charAt(i)));}
                if (i == 138){singleDutMapResultDto.setSocket139(Character.toString(strDutMain.charAt(i)));}
                if (i == 139){singleDutMapResultDto.setSocket140(Character.toString(strDutMain.charAt(i)));}
                if (i == 140){singleDutMapResultDto.setSocket141(Character.toString(strDutMain.charAt(i)));}
                if (i == 141){singleDutMapResultDto.setSocket142(Character.toString(strDutMain.charAt(i)));}
                if (i == 142){singleDutMapResultDto.setSocket143(Character.toString(strDutMain.charAt(i)));}
                if (i == 143){singleDutMapResultDto.setSocket144(Character.toString(strDutMain.charAt(i)));}
                if (i == 144){singleDutMapResultDto.setSocket145(Character.toString(strDutMain.charAt(i)));}
                if (i == 145){singleDutMapResultDto.setSocket146(Character.toString(strDutMain.charAt(i)));}
                if (i == 146){singleDutMapResultDto.setSocket147(Character.toString(strDutMain.charAt(i)));}
                if (i == 147){singleDutMapResultDto.setSocket148(Character.toString(strDutMain.charAt(i)));}
                if (i == 148){singleDutMapResultDto.setSocket149(Character.toString(strDutMain.charAt(i)));}
                if (i == 149){singleDutMapResultDto.setSocket150(Character.toString(strDutMain.charAt(i)));}
                if (i == 150){singleDutMapResultDto.setSocket151(Character.toString(strDutMain.charAt(i)));}
                if (i == 151){singleDutMapResultDto.setSocket152(Character.toString(strDutMain.charAt(i)));}
                if (i == 152){singleDutMapResultDto.setSocket153(Character.toString(strDutMain.charAt(i)));}
                if (i == 153){singleDutMapResultDto.setSocket154(Character.toString(strDutMain.charAt(i)));}
                if (i == 154){singleDutMapResultDto.setSocket155(Character.toString(strDutMain.charAt(i)));}
                if (i == 155){singleDutMapResultDto.setSocket156(Character.toString(strDutMain.charAt(i)));}
                if (i == 156){singleDutMapResultDto.setSocket157(Character.toString(strDutMain.charAt(i)));}
                if (i == 157){singleDutMapResultDto.setSocket158(Character.toString(strDutMain.charAt(i)));}
                if (i == 158){singleDutMapResultDto.setSocket159(Character.toString(strDutMain.charAt(i)));}
                if (i == 159){singleDutMapResultDto.setSocket160(Character.toString(strDutMain.charAt(i)));}
                if (i == 160){singleDutMapResultDto.setSocket161(Character.toString(strDutMain.charAt(i)));}
                if (i == 161){singleDutMapResultDto.setSocket162(Character.toString(strDutMain.charAt(i)));}
                if (i == 162){singleDutMapResultDto.setSocket163(Character.toString(strDutMain.charAt(i)));}
                if (i == 163){singleDutMapResultDto.setSocket164(Character.toString(strDutMain.charAt(i)));}
                if (i == 164){singleDutMapResultDto.setSocket165(Character.toString(strDutMain.charAt(i)));}
                if (i == 165){singleDutMapResultDto.setSocket166(Character.toString(strDutMain.charAt(i)));}
                if (i == 166){singleDutMapResultDto.setSocket167(Character.toString(strDutMain.charAt(i)));}
                if (i == 167){singleDutMapResultDto.setSocket168(Character.toString(strDutMain.charAt(i)));}
                if (i == 168){singleDutMapResultDto.setSocket169(Character.toString(strDutMain.charAt(i)));}
                if (i == 169){singleDutMapResultDto.setSocket170(Character.toString(strDutMain.charAt(i)));}
                if (i == 170){singleDutMapResultDto.setSocket171(Character.toString(strDutMain.charAt(i)));}
                if (i == 171){singleDutMapResultDto.setSocket172(Character.toString(strDutMain.charAt(i)));}
                if (i == 172){singleDutMapResultDto.setSocket173(Character.toString(strDutMain.charAt(i)));}
                if (i == 173){singleDutMapResultDto.setSocket174(Character.toString(strDutMain.charAt(i)));}
                if (i == 174){singleDutMapResultDto.setSocket175(Character.toString(strDutMain.charAt(i)));}
                if (i == 175){singleDutMapResultDto.setSocket176(Character.toString(strDutMain.charAt(i)));}
                if (i == 176){singleDutMapResultDto.setSocket177(Character.toString(strDutMain.charAt(i)));}
                if (i == 177){singleDutMapResultDto.setSocket178(Character.toString(strDutMain.charAt(i)));}
                if (i == 178){singleDutMapResultDto.setSocket179(Character.toString(strDutMain.charAt(i)));}
                if (i == 179){singleDutMapResultDto.setSocket180(Character.toString(strDutMain.charAt(i)));}
                if (i == 180){singleDutMapResultDto.setSocket181(Character.toString(strDutMain.charAt(i)));}
                if (i == 181){singleDutMapResultDto.setSocket182(Character.toString(strDutMain.charAt(i)));}
                if (i == 182){singleDutMapResultDto.setSocket183(Character.toString(strDutMain.charAt(i)));}
                if (i == 183){singleDutMapResultDto.setSocket184(Character.toString(strDutMain.charAt(i)));}
                if (i == 184){singleDutMapResultDto.setSocket185(Character.toString(strDutMain.charAt(i)));}
                if (i == 185){singleDutMapResultDto.setSocket186(Character.toString(strDutMain.charAt(i)));}
                if (i == 186){singleDutMapResultDto.setSocket187(Character.toString(strDutMain.charAt(i)));}
                if (i == 187){singleDutMapResultDto.setSocket188(Character.toString(strDutMain.charAt(i)));}
                if (i == 188){singleDutMapResultDto.setSocket189(Character.toString(strDutMain.charAt(i)));}
                if (i == 189){singleDutMapResultDto.setSocket190(Character.toString(strDutMain.charAt(i)));}
                if (i == 190){singleDutMapResultDto.setSocket191(Character.toString(strDutMain.charAt(i)));}
                if (i == 191){singleDutMapResultDto.setSocket192(Character.toString(strDutMain.charAt(i)));}
                if (i == 192){singleDutMapResultDto.setSocket193(Character.toString(strDutMain.charAt(i)));}
                if (i == 193){singleDutMapResultDto.setSocket194(Character.toString(strDutMain.charAt(i)));}
                if (i == 194){singleDutMapResultDto.setSocket195(Character.toString(strDutMain.charAt(i)));}
                if (i == 195){singleDutMapResultDto.setSocket196(Character.toString(strDutMain.charAt(i)));}
                if (i == 196){singleDutMapResultDto.setSocket197(Character.toString(strDutMain.charAt(i)));}
                if (i == 197){singleDutMapResultDto.setSocket198(Character.toString(strDutMain.charAt(i)));}
                if (i == 198){singleDutMapResultDto.setSocket199(Character.toString(strDutMain.charAt(i)));}
                if (i == 199){singleDutMapResultDto.setSocket200(Character.toString(strDutMain.charAt(i)));}
                if (i == 200){singleDutMapResultDto.setSocket201(Character.toString(strDutMain.charAt(i)));}
                if (i == 201){singleDutMapResultDto.setSocket202(Character.toString(strDutMain.charAt(i)));}
                if (i == 202){singleDutMapResultDto.setSocket203(Character.toString(strDutMain.charAt(i)));}
                if (i == 203){singleDutMapResultDto.setSocket204(Character.toString(strDutMain.charAt(i)));}
                if (i == 204){singleDutMapResultDto.setSocket205(Character.toString(strDutMain.charAt(i)));}
                if (i == 205){singleDutMapResultDto.setSocket206(Character.toString(strDutMain.charAt(i)));}
                if (i == 206){singleDutMapResultDto.setSocket207(Character.toString(strDutMain.charAt(i)));}
                if (i == 207){singleDutMapResultDto.setSocket208(Character.toString(strDutMain.charAt(i)));}
                if (i == 208){singleDutMapResultDto.setSocket209(Character.toString(strDutMain.charAt(i)));}
                if (i == 209){singleDutMapResultDto.setSocket210(Character.toString(strDutMain.charAt(i)));}
                if (i == 210){singleDutMapResultDto.setSocket211(Character.toString(strDutMain.charAt(i)));}
                if (i == 211){singleDutMapResultDto.setSocket212(Character.toString(strDutMain.charAt(i)));}
                if (i == 212){singleDutMapResultDto.setSocket213(Character.toString(strDutMain.charAt(i)));}
                if (i == 213){singleDutMapResultDto.setSocket214(Character.toString(strDutMain.charAt(i)));}
                if (i == 214){singleDutMapResultDto.setSocket215(Character.toString(strDutMain.charAt(i)));}
                if (i == 215){singleDutMapResultDto.setSocket216(Character.toString(strDutMain.charAt(i)));}
                if (i == 216){singleDutMapResultDto.setSocket217(Character.toString(strDutMain.charAt(i)));}
                if (i == 217){singleDutMapResultDto.setSocket218(Character.toString(strDutMain.charAt(i)));}
                if (i == 218){singleDutMapResultDto.setSocket219(Character.toString(strDutMain.charAt(i)));}
                if (i == 219){singleDutMapResultDto.setSocket220(Character.toString(strDutMain.charAt(i)));}
                if (i == 220){singleDutMapResultDto.setSocket221(Character.toString(strDutMain.charAt(i)));}
                if (i == 221){singleDutMapResultDto.setSocket222(Character.toString(strDutMain.charAt(i)));}
                if (i == 222){singleDutMapResultDto.setSocket223(Character.toString(strDutMain.charAt(i)));}
                if (i == 223){singleDutMapResultDto.setSocket224(Character.toString(strDutMain.charAt(i)));}
                if (i == 224){singleDutMapResultDto.setSocket225(Character.toString(strDutMain.charAt(i)));}
                if (i == 225){singleDutMapResultDto.setSocket226(Character.toString(strDutMain.charAt(i)));}
                if (i == 226){singleDutMapResultDto.setSocket227(Character.toString(strDutMain.charAt(i)));}
                if (i == 227){singleDutMapResultDto.setSocket228(Character.toString(strDutMain.charAt(i)));}
                if (i == 228){singleDutMapResultDto.setSocket229(Character.toString(strDutMain.charAt(i)));}
                if (i == 229){singleDutMapResultDto.setSocket230(Character.toString(strDutMain.charAt(i)));}
                if (i == 230){singleDutMapResultDto.setSocket231(Character.toString(strDutMain.charAt(i)));}
                if (i == 231){singleDutMapResultDto.setSocket232(Character.toString(strDutMain.charAt(i)));}
                if (i == 232){singleDutMapResultDto.setSocket233(Character.toString(strDutMain.charAt(i)));}
                if (i == 233){singleDutMapResultDto.setSocket234(Character.toString(strDutMain.charAt(i)));}
                if (i == 234){singleDutMapResultDto.setSocket235(Character.toString(strDutMain.charAt(i)));}
                if (i == 235){singleDutMapResultDto.setSocket236(Character.toString(strDutMain.charAt(i)));}
                if (i == 236){singleDutMapResultDto.setSocket237(Character.toString(strDutMain.charAt(i)));}
                if (i == 237){singleDutMapResultDto.setSocket238(Character.toString(strDutMain.charAt(i)));}
                if (i == 238){singleDutMapResultDto.setSocket239(Character.toString(strDutMain.charAt(i)));}
                if (i == 239){singleDutMapResultDto.setSocket240(Character.toString(strDutMain.charAt(i)));}
                if (i == 240){singleDutMapResultDto.setSocket241(Character.toString(strDutMain.charAt(i)));}
                if (i == 241){singleDutMapResultDto.setSocket242(Character.toString(strDutMain.charAt(i)));}
                if (i == 242){singleDutMapResultDto.setSocket243(Character.toString(strDutMain.charAt(i)));}
                if (i == 243){singleDutMapResultDto.setSocket244(Character.toString(strDutMain.charAt(i)));}
                if (i == 244){singleDutMapResultDto.setSocket245(Character.toString(strDutMain.charAt(i)));}
                if (i == 245){singleDutMapResultDto.setSocket246(Character.toString(strDutMain.charAt(i)));}
                if (i == 246){singleDutMapResultDto.setSocket247(Character.toString(strDutMain.charAt(i)));}
                if (i == 247){singleDutMapResultDto.setSocket248(Character.toString(strDutMain.charAt(i)));}
                if (i == 248){singleDutMapResultDto.setSocket249(Character.toString(strDutMain.charAt(i)));}
                if (i == 249){singleDutMapResultDto.setSocket250(Character.toString(strDutMain.charAt(i)));}
                if (i == 250){singleDutMapResultDto.setSocket251(Character.toString(strDutMain.charAt(i)));}
                if (i == 251){singleDutMapResultDto.setSocket252(Character.toString(strDutMain.charAt(i)));}
                if (i == 252){singleDutMapResultDto.setSocket253(Character.toString(strDutMain.charAt(i)));}
                if (i == 253){singleDutMapResultDto.setSocket254(Character.toString(strDutMain.charAt(i)));}
                if (i == 254){singleDutMapResultDto.setSocket255(Character.toString(strDutMain.charAt(i)));}
                if (i == 255){singleDutMapResultDto.setSocket256(Character.toString(strDutMain.charAt(i)));}


            }


            singleDutMapResultDtoList.add(singleDutMapResultDto);
        }





        return singleDutMapResultDtoList;
    }
}
