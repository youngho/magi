package kr.famos.com.mapper;

import kr.famos.com.dto.ComMenuDto;
import kr.famos.com.dto.MenuItemDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-21.
 */
@Mapper
public interface ComMenuMapper {

    public List<MenuItemDto> retrieveMenuItems(ComMenuDto comMenuDto);

    public List<ComMenuDto> retrieveMenuGroups(String authority);

}