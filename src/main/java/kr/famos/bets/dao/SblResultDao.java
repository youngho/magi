package kr.famos.bets.dao;

import kr.famos.bets.domain.SblResult;
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
public class SblResultDao {
    private static final Logger logger = LoggerFactory.getLogger(SblResultDao.class);

    @Autowired
    private SqlSession sqlSession;

    public SblResultDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<SblResult> retrieveSblResult(){
        logger.info("retrieveSblResult 메소드 호출");
        return this.sqlSession.selectList("retrieveSblResult");
    }
}
