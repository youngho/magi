package kr.famos.base.mapper;

import kr.famos.base.domain.StIndex;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
public interface StIndexMapper {
    @Select("SELECT * FROM ST_INDEX")
    public List<StIndex> readAllStIndex();
}
