package kr.famos.base.mapper;

import kr.famos.base.domain.LastTable;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface LastTableMapper {
    @Select("SELECT * FROM LAST_TABLE")
    public List<LastTable> readAllLastTable();

    @Insert("INSERT INTO LAST_TABLE(USER_ID) VALUES(#{userId})")
    public void insertLastTable(LastTable lastTable);
}
