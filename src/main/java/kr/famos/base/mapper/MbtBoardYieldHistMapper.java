package kr.famos.base.mapper;

import kr.famos.base.domain.MbtBoardYieldHist;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
public interface MbtBoardYieldHistMapper {
    @Select("SELECT * FROM MBT_BOARD_YIELD_HIST")
    public List<MbtBoardYieldHist> readAllMbtBoardYieldHist();
}
