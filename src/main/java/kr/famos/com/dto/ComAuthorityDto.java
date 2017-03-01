package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-02-09.
 */
public class ComAuthorityDto {
    private String userNm = "";    // 사용자명
    private String authorityNm = "";    // 권한명

    public String getUserNm() {
        return userNm;
    }

    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }

    public String getAuthorityNm() {
        return authorityNm;
    }

    public void setAuthorityNm(String authorityNm) {
        this.authorityNm = authorityNm;
    }
}
