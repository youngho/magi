package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-03.
 * 동적 메뉴를 구성하기 위한 정보를 담고 있다.
 * COM_AUTHORITY 테이블의 AUTHORITY_NM 컬럼의 값과 authority가 같아야 한다.
 */
public class MenuDto {
    private String menuItemParent = "";
    private String menu = "";
    private String routerLink = "";
    private String authority = "";

}
