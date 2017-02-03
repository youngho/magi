package kr.famos.base.mapper;

import kr.famos.base.domain.LastTablePn2m;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
public interface LastTablePn2mMapper {
    @Select("SELECT * FROM LAST_TABLE_PN2M")
    public List<LastTablePn2m> readAllLastTablePn2m();
}
