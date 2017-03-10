package kr.famos.bets.basisInformation.binDescription.service;

import kr.famos.bets.basisInformation.binDescription.dto.BinDescriptionDto;
import kr.famos.bets.basisInformation.binDescription.mapper.BinDescriptionMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yhkim on 2017-02-27.
 */
@Service
public class BinDescriptionService {

    private static final Logger logger = LoggerFactory.getLogger(BinDescriptionService.class);

    private final BinDescriptionMapper binDescriptionMapper;

    @Autowired
    public BinDescriptionService(BinDescriptionMapper binDescriptionMapper) {
        this.binDescriptionMapper = binDescriptionMapper;
    }


    public List<BinDescriptionDto> retrieveBinDescription(BinDescriptionDto binDescriptionDto){
        logger.debug("BinDescriptionService - retrieveBinDescription");
        List<BinDescriptionDto> binDescriptionDtoList = binDescriptionMapper.retrieveBinDescription(binDescriptionDto);
        // TODO
        return binDescriptionDtoList;
    }

    public BinDescriptionDto retrieveBinDescriptionByKey(BinDescriptionDto binDescriptionDto){
        logger.debug("BinDescriptionService - retrieveBinDescription");
        BinDescriptionDto binDescriptionByKey = binDescriptionMapper.retrieveBinDescriptionByKey(binDescriptionDto);
        // TODO
        return binDescriptionByKey;
    }

    public void insertBinDescription(BinDescriptionDto binDescriptionDto){

        binDescriptionMapper.insertBinDescription(binDescriptionDto);
    }
}
