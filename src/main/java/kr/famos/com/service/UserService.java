/**
 * UserService 인터페이스
 * UserService 인터페이스는 UserDetailsService 인터페이스를 상속 받아야 함
 * UserDetailsService를 구현해야만 Spring Security에서 정상적으로 조회를 할 수 있기 때문
 */
package kr.famos.com.service;

import kr.famos.com.dto.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

/**
 * Created by yhkim on 2017-02-24.
 */
@Service
public interface UserService extends UserDetailsService {
    //권한을 받아오는 메소드
    Collection<GrantedAuthority> getAuthorities(String username);
    //향후 유저 등록이라든지, 수정, 삭제 Service들을 추가하면 됨
    public User readUser(String username);
    public void createUser(User user);
    public void deleteUser(String username);
    public PasswordEncoder passwordEncoder();
    public List<User> retrieveRegister(User user);
}
