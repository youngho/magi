package kr.famos.base.mapper;

import kr.famos.base.domain.EquipmentLayout;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface EquipmentLayoutMapper {
    @Select("SELECT * FROM EQUIPMENT_LAYOUT WHERE SYS_DATE = #{sys_date}")
    public EquipmentLayout readEquipmentLayout(@Param("sys_date") String name);

    @Select("SELECT * FROM EQUIPMENT_LAYOUT")
    public List<EquipmentLayout> readAllEquipmentLayout();
}
