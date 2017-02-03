package kr.famos.base.mapper;

import kr.famos.base.domain.LastTableEvent;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface LastTableEventMapper {
    @Select("SELECT * FROM LAST_TABLE_EVENT")
    public List<LastTableEvent> readAllLastTableEvent();
}
