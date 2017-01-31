package kr.famos.base.mapper;


import kr.famos.base.domain.Bibendwork;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface BibendworkMapper {

        @Select("SELECT * FROM BIBENDWORK WHERE SYS_DATE = #{sys_date}")
        public Bibendwork readBibendwork(@Param("sys_date") String name);

        @Select("SELECT * FROM BIBENDWORK")
        public List<Bibendwork> readAllBibendwork();
}
