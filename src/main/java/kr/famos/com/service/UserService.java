package kr.famos.com.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by yhkim on 2017-02-24.
 */
@Service
public interface UserService extends UserDetailsService {
    Collection<GrantedAuthority> getAuthorities(String username);
}
