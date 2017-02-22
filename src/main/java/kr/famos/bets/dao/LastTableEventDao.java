package kr.famos.bets.dao;

import kr.famos.bets.domain.LastTableEvent;
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

    public List<LastTableEvent> retrieveLastTableEvent() {
        logger.info("retrieveLastTableEvent 메소드 호출");
        return this.sqlSession.selectList("retrieveLastTableEvent");
    }

    public void insertLastTableEvent(LastTableEvent lastTableEvent) {
        logger.info("retrieveLastTableEvent 메소드 호출");
        this.sqlSession.insert("insertLastTableEvent", lastTableEvent);
    }
}