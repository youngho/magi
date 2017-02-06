package kr.famos.base.mapper;

import kr.famos.base.domain.MbtEquipmentInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface MbtEquipmentInfoMapper {
    @Select("SELECT * FROM MBT_EQUIPMENT_INFO")
    public List<MbtEquipmentInfo> readAllMbtEquipmentInfo();
}
