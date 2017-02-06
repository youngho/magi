package kr.famos.base.mapper;

import kr.famos.base.domain.MbtLastTableEvent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface MbtLastTableEventMapper {
    @Select("SELECT * FROM MBT_LAST_TABLE_EVENT")
    public List<MbtLastTableEvent> readAllMbtLastTableEvent();
}
