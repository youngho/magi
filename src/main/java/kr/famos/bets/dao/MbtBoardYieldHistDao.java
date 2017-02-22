package kr.famos.bets.dao;

import kr.famos.bets.domain.MbtBoardYieldHist;
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
public class MbtBoardYieldHistDao {
    private static final Logger logger = LoggerFactory.getLogger(MbtBoardYieldHistDao.class);

    @Autowired
    private SqlSession sqlSession;

    public MbtBoardYieldHistDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<MbtBoardYieldHist> retrieveMbtBoardYieldHist() {
        logger.info("retrieveMbtBoardYieldHist 메소드 호출");
        return this.sqlSession.selectList("retrieveMbtBoardYieldHist");
    }
}
