package kr.famos.com.service;

import kr.famos.com.dto.User;
import kr.famos.com.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

/**
 * Created by yhkim on 2017-02-24.
 * UserService를 implemets 하게 되면 loadUserByUsername 메소드를 반드시 구현해야 함
 * 이 메소드는 UserDetailsService에 정의된 메소드로 실제 Spring security에서 User 정보를 읽을 때 사용
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userMapper.readUser(username);
        user.setAuthorities(getAuthorities(username));

        return user;
    }

    /*
    User를 읽어왔으면 권한을 부여해줌
    getAuthorities 메소드를 이용해서 권한을 부여한뒤 리턴
    권한은 MyBatis를 통해 String을 가져왔으므로 GrantedAuthority 인터페이스에 맞게 SimpleGrantedAuthority로 변환해서 리스트를 만든 후 리턴
     */
    public Collection<GrantedAuthority> getAuthorities(String username) {
        Collection<GrantedAuthority> authorities = userMapper.readAuthority(username);
        return authorities;
    }

    @Override
    public User readUser(String username) {
        User user = userMapper.readUser(username);
        user.setAuthorities(userMapper.readAuthority(username));
        return user;
    }

    @Override
    public void createUser(User user) {
        String rawPassword = user.getPassword();
        String encodedPassword = new BCryptPasswordEncoder().encode(rawPassword);
        user.setPassword(encodedPassword);
        userMapper.createUser(user);
        userMapper.createAuthority(user);
    }

    @Override
    public void updateUser(User user) {
        String rawPassword = user.getPassword();
        String encodedPassword = new BCryptPasswordEncoder().encode(rawPassword);
        user.setPassword(encodedPassword);
        userMapper.updateUser(user);
        userMapper.updateAuthority(user);
    }

    @Override
    public void deleteUser(String username) {
        userMapper.deleteUser(username);
        userMapper.deleteAuthority(username);
    }


    @Override
    public PasswordEncoder passwordEncoder() {
        return this.passwordEncoder;
    }

    /**
     * 사용자가 여려 종류의 권한을 갖을 수 있는 구조이다.
     * 2017-03-03 현재는 한 종류 만을 text로 받아 저장한다.
     *
     * @param user
     * @return
     */
    @Override
    public List<User> retrieveRegister(User user) {
        List<User> userList = userMapper.retrieveRegister(user);
        return userList;
    }
}
