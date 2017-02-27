package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-02-27.
 * 단순히 ID와 PW를 받아오는 객체입니다. client에서 인증에 요청하는 값을 저장하는 클래스입니다.
 */
public class AuthenticationRequest {
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
