package kr.famos.bets.tdbiAnalysis.tdbiDc.service;

import kr.famos.bets.tdbiAnalysis.tdbiDc.dto.TdbiDcCondDto;
import kr.famos.bets.tdbiAnalysis.tdbiDc.dto.TdbiDcResultDto;
import kr.famos.bets.tdbiAnalysis.tdbiDc.mapper.TdbiDcMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * BETS-UI-0506 : TDBI DC
 */
@Service
public class TdbiDcService {

    private static final Logger logger = LoggerFactory.getLogger(TdbiDcService.class);

    @Autowired
    TdbiDcMapper tdbiDcMapper;

    public List<TdbiDcResultDto> retrieveTdbiDc(TdbiDcCondDto tdbiDcCondDto) {

        List<TdbiDcResultDto> tdbiDcResultDtoList = tdbiDcMapper.retrieveTdbiDc(tdbiDcCondDto);
        /**
         * 강래완 책임님 요구사항으로 아래와 같은 로직으로 DC의 나머지 항목을 계산하여 보여줌
         * DC PASS BIN = BIN1
         * YIELD = BIN1 / INPUT  까지인데, CV로 표현되어 현재는 보이지 않음.
         * BIN9 = INPUT - (BIN1 + … + BIN8)
         */
        for(TdbiDcResultDto list : tdbiDcResultDtoList){
            list.setPass(list.getBin1());   // PASS BIN 을 BIN1으로 보여줌
            list.setYield((float)list.getBin1() / (float)list.getInput());
            list.setBin9(list.getInput() - (list.getBin1() + list.getBin2() + list.getBin3() + list.getBin4() + list.getBin5() + list.getBin6() + list.getBin7() + list.getBin8()));
        }
        return tdbiDcResultDtoList;
    }


}
