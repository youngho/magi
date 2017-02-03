package kr.famos.base.dao;

import kr.famos.base.domain.LastTableEvent;
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
public class LastTableEventDao {
    private static final Logger logger = LoggerFactory.getLogger(LastTableEventDao.class);

    @Autowired
    private SqlSession sqlSession;

    public LastTableEventDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<LastTableEvent> retrieveLastTableEvent(){
        logger.info("retrieveLastTableEvent 메소드 호출");
        return this.sqlSession.selectList("retrieveLastTableEvent");
    }
}