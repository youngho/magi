package kr.famos.base.dao;

import kr.famos.base.domain.MbtLastTableEvent;
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
public class MbtLastTableEventDao {
    private static final Logger logger = LoggerFactory.getLogger(MbtLastTableEventDao.class);

    @Autowired
    private SqlSession sqlSession;

    public MbtLastTableEventDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<MbtLastTableEvent> retrieveMbtLastTableEvent(){
        logger.info("retrieveMbtLastTableEvent 메소드 호출");
        return this.sqlSession.selectList("retrieveMbtLastTableEvent");
    }
}
