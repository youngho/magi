package kr.famos.com.mapper;

import kr.famos.com.domain.ComAuthority;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-02-09.
 */
@Mapper
public interface ComAuthorityMapper {
    @Select("SELECT * FROM COM_AUTHORITY")
    public List<ComAuthority> readAllComAuthority();

    @Insert("INSERT INTO COM_AUTHORITY(USER_NM, AUTHORITY_NM) VALUES(#{user_nm}, #{authority_nm})")
    public void insertComAuthority(ComAuthority comAuthority);
}
