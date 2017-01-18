package kr.famos.home.mapper;

import kr.famos.home.domain.Home;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


/**
 * Created by x on 2017. 1. 10..
 */

@Mapper
public interface HomeMapper {
    @Select("SELECT * FROM home WHERE name = #{name}")
    public Home readHome(@Param("name") String name);
}
