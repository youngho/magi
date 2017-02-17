package kr.famos.base.dao;

import kr.famos.base.domain.StIndex;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by yhkim on 2017-02-03.
 */
@Component
public class StIndexDao {
    private static final Logger logger = LoggerFactory.getLogger(StIndexDao.class);

    @Autowired
    private SqlSession sqlSession;

    public StIndexDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<StIndex> retrieveStIndex(){
        logger.info("retrieveStIndex 메소드 호출");
        return this.sqlSession.selectList("retrieveStIndex");
    }
}
