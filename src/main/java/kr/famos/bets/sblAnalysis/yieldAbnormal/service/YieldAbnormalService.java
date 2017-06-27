package kr.famos.bets.sblAnalysis.yieldAbnormal.service;

import kr.famos.bets.sblAnalysis.yieldAbnormal.dto.YieldAbnormalDto;
import kr.famos.bets.sblAnalysis.yieldAbnormal.dto.YieldAbnormalQueryResultDto;
import kr.famos.bets.sblAnalysis.yieldAbnormal.dto.YieldAbnormalResultDto;
import kr.famos.bets.sblAnalysis.yieldAbnormal.mapper.YieldAbnormalMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class YieldAbnormalService {

    private static final Logger logger = LoggerFactory.getLogger(YieldAbnormalService.class);

    @Autowired
    YieldAbnormalMapper yieldAbnormalMapper;

    public List<YieldAbnormalResultDto> retrieveYieldAbnormal(YieldAbnormalDto yieldAbnormalDto) {

        List<YieldAbnormalResultDto> resultDtos = new ArrayList<>();

        /**
         * 기존 쿼리에서 반환하는 DTO 형식은 YieldAbnormalQueryResultDto 이고,
         * 화면에 요구사항에 의해 화면에 보여지는 DTO는 YieldAbnormalResultDto 형식이다
         * Bin Type 은 아래와 같은 순으로 ROW로 보여진다
         * Tester Bin
         * Handler Bin
         * OP Bin
         * SBL Result
         */
        List<YieldAbnormalQueryResultDto> queryResultDtos = yieldAbnormalMapper.retrieveYieldAbnormal(yieldAbnormalDto);
        for(YieldAbnormalQueryResultDto list : queryResultDtos){
            YieldAbnormalResultDto tempDto = new YieldAbnormalResultDto();
            tempDto.setPartNumber(list.getPartNumber());
            tempDto.setOperatorId(list.getOperatorId());
            tempDto.setLotId(list.getLotId());
            tempDto.setLotInTime(list.getLotInTime());
            tempDto.setEndTime(list.getEndTime());
            tempDto.setProcessCode(list.getProcessCode());
            tempDto.setTesterModel(list.getTesterModel());
            tempDto.setTesterNumber(list.getTesterNumber());
            tempDto.setHead(list.getHead());
            tempDto.setBoardId(list.getBoardId());
            tempDto.setSblFirmwareResult(list.getSblFirmwareResult());
            tempDto.setMainProgramName(list.getMainProgramName());
            tempDto.setSblCID(list.getSblCID());
            tempDto.setSblResult(list.getSblResult());

            // Tester Bin
            tempDto.setBinType("Tester Bin");
            tempDto.setInput(list.gettInput());
            tempDto.setPass(list.gettPass());
            tempDto.setYield(list.gettYield());
            tempDto.setBin1(list.gettBin1());
            tempDto.setBin2(list.gettBin2());
            tempDto.setBin3(list.gettBin3());
            tempDto.setBin4(list.gettBin4());
            tempDto.setBin5(list.gettBin5());
            tempDto.setBin6(list.gettBin6());
            tempDto.setBin7(list.gettBin7());
            tempDto.setBin8(list.gettBin8());
            tempDto.setBin9(list.gettBin9());
            resultDtos.add(tempDto);    // 결과 DTO에 추가한다.
            tempDto = new YieldAbnormalResultDto();
            // Handler Bin Header Info(같은 데이터를 병합하기위해 헤더부분을 중복하여 입력한다)
            tempDto.setPartNumber(list.getPartNumber());
            tempDto.setOperatorId(list.getOperatorId());
            tempDto.setLotId(list.getLotId());
            tempDto.setLotInTime(list.getLotInTime());
            tempDto.setEndTime(list.getEndTime());
            tempDto.setProcessCode(list.getProcessCode());
            tempDto.setTesterModel(list.getTesterModel());
            tempDto.setTesterNumber(list.getTesterNumber());
            tempDto.setHead(list.getHead());
            tempDto.setBoardId(list.getBoardId());
            tempDto.setSblFirmwareResult(list.getSblFirmwareResult());
            tempDto.setMainProgramName(list.getMainProgramName());
            tempDto.setSblCID(list.getSblCID());
            tempDto.setSblResult(list.getSblResult());
            // Handler Bin
            tempDto.setBinType("Handler Bin");
            tempDto.setInput(list.gethInput());
            tempDto.setPass(list.gethPass());
            tempDto.setYield(list.gethYield());
            tempDto.setBin1(list.gethBin1());
            tempDto.setBin2(list.gethBin2());
            tempDto.setBin3(list.gethBin3());
            tempDto.setBin4(list.gethBin4());
            tempDto.setBin5(list.gethBin5());
            tempDto.setBin6(list.gethBin6());
            tempDto.setBin7(list.gethBin7());
            tempDto.setBin8(list.gethBin8());
            tempDto.setBin9(list.gethBin9());
            resultDtos.add(tempDto);    // 결과 DTO에 추가한다.
            tempDto = new YieldAbnormalResultDto();
            // OP Bin Header Info(같은 데이터를 병합하기위해 헤더부분을 중복하여 입력한다)
            tempDto.setPartNumber(list.getPartNumber());
            tempDto.setOperatorId(list.getOperatorId());
            tempDto.setLotId(list.getLotId());
            tempDto.setLotInTime(list.getLotInTime());
            tempDto.setEndTime(list.getEndTime());
            tempDto.setProcessCode(list.getProcessCode());
            tempDto.setTesterModel(list.getTesterModel());
            tempDto.setTesterNumber(list.getTesterNumber());
            tempDto.setHead(list.getHead());
            tempDto.setBoardId(list.getBoardId());
            tempDto.setSblFirmwareResult(list.getSblFirmwareResult());
            tempDto.setMainProgramName(list.getMainProgramName());
            tempDto.setSblCID(list.getSblCID());
            tempDto.setSblResult(list.getSblResult());
            // OP Bin
            tempDto.setBinType("OP Bin");
            tempDto.setInput(list.getOpInput());
            tempDto.setPass(list.getOpPass());
            tempDto.setYield(list.getOpYield());
            tempDto.setBin1(list.getOpBin1());
            tempDto.setBin2(list.getOpBin2());
            tempDto.setBin3(list.getOpBin3());
            tempDto.setBin4(list.getOpBin4());
            tempDto.setBin5(list.getOpBin5());
            tempDto.setBin6(list.getOpBin6());
            tempDto.setBin7(list.getOpBin7());
            tempDto.setBin8(list.getOpBin8());
            tempDto.setBin9(list.getOpBin9());
            resultDtos.add(tempDto);    // 결과 DTO에 추가한다.
            tempDto = new YieldAbnormalResultDto();
            // SBL Result Header Info(같은 데이터를 병합하기위해 헤더부분을 중복하여 입력한다)
            tempDto.setPartNumber(list.getPartNumber());
            tempDto.setOperatorId(list.getOperatorId());
            tempDto.setLotId(list.getLotId());
            tempDto.setLotInTime(list.getLotInTime());
            tempDto.setEndTime(list.getEndTime());
            tempDto.setProcessCode(list.getProcessCode());
            tempDto.setTesterModel(list.getTesterModel());
            tempDto.setTesterNumber(list.getTesterNumber());
            tempDto.setHead(list.getHead());
            tempDto.setBoardId(list.getBoardId());
            tempDto.setSblFirmwareResult(list.getSblFirmwareResult());
            tempDto.setMainProgramName(list.getMainProgramName());
            tempDto.setSblCID(list.getSblCID());
            tempDto.setSblResult(list.getSblResult());
            // SBL Result
            tempDto.setBinType("SBL Result");
            tempDto.setInput("NULL");
            tempDto.setPass("NULL");
            tempDto.setYield(list.getSblYieldResult());
            tempDto.setBin1(list.getSblBin1Result());
            tempDto.setBin2(list.getSblBin2Result());
            tempDto.setBin3(list.getSblBin3Result());
            tempDto.setBin4(list.getSblBin4Result());
            tempDto.setBin5(list.getSblBin5Result());
            tempDto.setBin6(list.getSblBin6Result());
            tempDto.setBin7(list.getSblBin7Result());
            tempDto.setBin8(list.getSblBin8Result());
            tempDto.setBin9(list.getSblBin9Result());
            resultDtos.add(tempDto);    // 결과 DTO에 추가한다.
        }
        return resultDtos;
    }
}