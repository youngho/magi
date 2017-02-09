package kr.famos.com.domain;

/**
 * Created by yhkim on 2017-02-09.
 */
public class ComAuthority {
    private String user_nm = "";    // 사용자명
    private String authority_nm = "";    // 권한명

    public String getUser_nm() {
        return user_nm;
    }

    public void setUser_nm(String user_nm) {
        this.user_nm = user_nm;
    }

    public String getAuthority_nm() {
        return authority_nm;
    }

    public void setAuthority_nm(String authority_nm) {
        this.authority_nm = authority_nm;
    }
}
