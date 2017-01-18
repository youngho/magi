package kr.famos.base.mapper;

import kr.famos.base.domain.TestYieldHist;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by x on 2017. 1. 11..
 */
@Mapper
public interface TestYieldHistMapper {
        @Select("SELECT * FROM TEST_YIELD_HIST WHERE SYS_DATE = #{sys_date}")
        public TestYieldHist readTestYieldHist(@Param("sys_date") String name);

        @Select("SELECT * FROM TEST_YIELD_HIST")
        public List<TestYieldHist> readAllTestYieldHist();
}
