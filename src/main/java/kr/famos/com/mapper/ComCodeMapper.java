package kr.famos.com.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-03-21.
 */
@Mapper
public interface ComCodeMapper {

    public List<String> retrieveProcessCode();

}