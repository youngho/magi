package kr.famos.base.mapper;

import kr.famos.base.domain.SblResult;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface SblResultMapper {
    @Select("SELECT * FROM SBL_RESULT")
    public List<SblResult> readAllSblResult();
}
