package kr.famos.bets.dao;

import kr.famos.bets.domain.LotYield;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by yhkim on 2017-02-21.
 */
@Component
public class LotYieldDao {
    private static final Logger logger = LoggerFactory.getLogger(LotYieldDao.class);

    @Autowired
    private SqlSession sqlSession;

    public List<LotYield> retrieveLotYield(LotYield lotYield) {
        logger.info("LotYieldDao - retrieveLotYield 메소드 호출");
        return this.sqlSession.selectList("retrieveYieldHist", lotYield);
    }
}
