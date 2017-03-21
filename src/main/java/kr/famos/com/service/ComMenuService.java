package kr.famos.com.service;


import kr.famos.com.dto.ComMenuDto;
import kr.famos.com.dto.MenuGroupDto;
import kr.famos.com.dto.MenuItemDto;
import kr.famos.com.mapper.ComMenuMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class ComMenuService {

    private static final Logger logger = LoggerFactory.getLogger(ComMenuService.class);

    @Autowired
    ComMenuMapper comMenuMapper;


    public List<MenuGroupDto> retrieveNavigation(String authority) {

        /**
         * 권한으로 COM_MENU 테이블에 있는 메뉴그룹항목을 조회하여 메뉴의 하위 항목을 가져온다.
         */
        List<MenuGroupDto> returnDto = new ArrayList<>();

        List<ComMenuDto> menuGroups = comMenuMapper.retrieveMenuGroups(authority);

        for (ComMenuDto group : menuGroups){
            logger.debug("메뉴명 : " + group.getMenuNm());

            MenuGroupDto menuGroupDto = new MenuGroupDto();
            menuGroupDto.setSection(group.getMenuNm()); //그룹명을 섹션명으로 먼저 셋팅후

            // 각 메뉴 항목을 가져와 하위 메뉴로 추가한다.
            List<MenuItemDto> menuItems = comMenuMapper.retrieveMenuItems(group);
            for (MenuItemDto item : menuItems){
                menuGroupDto.getLinks().add(item);
            }

            returnDto.add(menuGroupDto);

        }

//        returnDto.get(0).(comMenuMapper.retrieveMenuItems(authority));
        return returnDto;
    }

/*
    public void insertComUserUsage(ComUserUsageDto comUserUsageDto) {
        //시스템 시간을 구해서 createDate에 넣는다.
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyyMMddHHmmss");
        String strDate = dayTime.format(new Date(time));

        comUserUsageDto.setCreateDate(strDate);

        comUserUsageMapper.insertComUserUsage(comUserUsageDto);
    }

*/

}
