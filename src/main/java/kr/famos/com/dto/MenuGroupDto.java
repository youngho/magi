package kr.famos.com.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-03-21.
 */
public class MenuGroupDto {
    private String section = "";

    private List<MenuItemDto> links = new ArrayList<>();

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public List<MenuItemDto> getLinks() {
        return links;
    }

    public void setLinks(List<MenuItemDto> links) {
        this.links = links;
    }
}
