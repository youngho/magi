package kr.famos.base.mapper;

import kr.famos.base.domain.LotinInfoHist;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
public interface LotinInfoHistMapper {
    @Select("SELECT * FROM LOTIN_INFO_HIST")
    public List<LotinInfoHist> readAllLotinInfoHist();
}
