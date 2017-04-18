package kr.famos.com.dto;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

/**
 * Created by yhkim on 2017-02-27.
 */
public class AuthenticationToken {
    private String username;
    private Collection<? extends GrantedAuthority> authorities;
    private String token;
    private String name;

    public AuthenticationToken(String username, Collection<? extends GrantedAuthority> collection, String token, String name) {
        this.username = username;
        this.authorities = collection;
        this.token = token;
        this.name = name;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
