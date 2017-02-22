package kr.famos.bets.dao;

import kr.famos.bets.domain.LastTablePn2m;
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
public class LastTablePn2mDao {
    private static final Logger logger = LoggerFactory.getLogger(LastTablePn2mDao.class);

    @Autowired
    private SqlSession sqlSession;

    public LastTablePn2mDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<LastTablePn2m> retrieveLastTablePn2m() {
        logger.info("retrieveLastTablePn2m 메소드 호출");
        return this.sqlSession.selectList("retrieveLastTablePn2m");
    }
}
