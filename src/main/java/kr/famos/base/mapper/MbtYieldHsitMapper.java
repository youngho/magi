package kr.famos.base.mapper;

import kr.famos.base.domain.MbtYieldHsit;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
public interface MbtYieldHsitMapper {
    @Select("SELECT * FROM MBT_YIELD_HSIT")
    public List<MbtYieldHsit> readAllMbtYieldHsit();
}
