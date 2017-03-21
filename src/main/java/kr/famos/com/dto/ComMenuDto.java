package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-21.
 */
public class ComMenuDto {
    private int comMenuId	= 0;	//
    private int menuLevel	= 0;	// 메뉴단계
    private int menuOrder	= 0;	// 메뉴순서

    private String menuNm	= "";	// 메뉴이름
    private String menuUrl	= "";	// 메뉴URL
    private String authority	= "";	// 사용권한

    private String useYn	= "";	// 사용여부
    private int groupId	= 0;	// 그룹명의 ID

    public int getComMenuId() {
        return comMenuId;
    }

    public void setComMenuId(int comMenuId) {
        this.comMenuId = comMenuId;
    }

    public int getMenuLevel() {
        return menuLevel;
    }

    public void setMenuLevel(int menuLevel) {
        this.menuLevel = menuLevel;
    }

    public int getMenuOrder() {
        return menuOrder;
    }

    public void setMenuOrder(int menuOrder) {
        this.menuOrder = menuOrder;
    }

    public String getMenuNm() {
        return menuNm;
    }

    public void setMenuNm(String menuNm) {
        this.menuNm = menuNm;
    }

    public String getMenuUrl() {
        return menuUrl;
    }

    public void setMenuUrl(String menuUrl) {
        this.menuUrl = menuUrl;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }
}
