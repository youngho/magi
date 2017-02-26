package kr.famos.com.mapper;

import kr.famos.com.domain.ComAuthority;
import kr.famos.com.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-02-09.
 */
@Mapper
public interface UserMapper {

    @Select("SELECT * FROM USER_MANAGER WHERE username = #{username}")
    public User readUser(String username);

    @Select("SELECT AUTHORITY_NM FROM COM_AUTHORITY WHERE USER_NM = #{userNm}")
    public List<String> readAuthority(String username);



    @Select("SELECT * FROM COM_AUTHORITY")
    public List<ComAuthority> readAllComAuthority(ComAuthority comAuthority);

    @Insert("INSERT INTO COM_AUTHORITY(USER_NM, AUTHORITY_NM) VALUES(#{userNm}, #{authorityNm})")
    public void insertComAuthority(ComAuthority comAuthority);
}
