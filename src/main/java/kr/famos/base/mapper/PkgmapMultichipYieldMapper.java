package kr.famos.base.mapper;

import kr.famos.base.domain.PkgmapMultichipYield;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
public interface PkgmapMultichipYieldMapper {
    @Select("SELECT * FROM PKGMAP_MULTICHIP_YIELD")
    public List<PkgmapMultichipYield> readAllPkgmapMultichipYield();
}
