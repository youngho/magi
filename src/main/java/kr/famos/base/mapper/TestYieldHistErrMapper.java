package kr.famos.base.mapper;

import kr.famos.base.domain.TestYieldHistErr;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface TestYieldHistErrMapper {
    @Select("SELECT * FROM TEST_YIELE)HIST_ERR")
    public List<TestYieldHistErr> readAllTestYieldHistErr();
}
