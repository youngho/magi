package kr.famos.bets.rawData.mapper;

import kr.famos.bets.rawData.dto.RawDataResultDto;
import kr.famos.bets.rawData.dto.RawDataRetrieveCondDto;
import org.apache.ibatis.annotations.Mapper;

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
 * 두 화면의 조회 테이블이 같고, 조회 파리미터의 값만 달라지기 때문에 같은 매퍼를 사용한다
 */
@Mapper
public interface RawDataMapper {

    public List<RawDataResultDto> retrieveRawData(RawDataRetrieveCondDto rawDataResultDto);
}
