package kr.famos.base.mapper;

import kr.famos.base.domain.LotinInfoHist;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface LotinInfoHistMapper {
//    @Select("SELECT * FROM LOTIN_INFO_HIST")
    @Select("SELECT * FROM LOTIN_INFO_HIST where SYS_DATE = '20140101002950'")
    public List<LotinInfoHist> readAllLotinInfoHist();
}
