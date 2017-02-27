package kr.famos.com.mapper;

import kr.famos.com.dto.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

/**
 * Created by yhkim on 2017-02-09.
 */
@Mapper
public interface UserMapper {

    public User readUser(String username);

    public List<GrantedAuthority> readAuthority(String username);

    public void createUser(User user);

    public void createAuthority(User user);

    public void deleteUser(String username);

    public void deleteAuthority(String username);

}
