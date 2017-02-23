package kr.famos.bets.dao;

import kr.famos.bets.domain.MbtYieldHist;
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
public class MbtYieldHistDao {
    private static final Logger logger = LoggerFactory.getLogger(MbtYieldHistDao.class);

    @Autowired
    private SqlSession sqlSession;

    public MbtYieldHistDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<MbtYieldHist> retrieveMbtYieldHist(){
        logger.info("retrieveMbtYieldHist 메소드 호출");
        return this.sqlSession.selectList("retrieveMbtYieldHist");
    }
}