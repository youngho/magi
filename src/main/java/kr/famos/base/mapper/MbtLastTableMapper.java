package kr.famos.base.mapper;

import kr.famos.base.domain.MbtLastTable;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
public interface MbtLastTableMapper {
    @Select("SELECT * FROM MBT_LAST_TABLE")
    public List<MbtLastTable> readAllMbtLastTable();
}
