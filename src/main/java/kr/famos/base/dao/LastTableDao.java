package kr.famos.base.dao;

import kr.famos.base.domain.Bibendwork;
import kr.famos.base.domain.LastTable;
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
public class LastTableDao {
    private static final Logger logger = LoggerFactory.getLogger(LastTableDao.class);

    @Autowired
    private SqlSession sqlSession;

    public LastTableDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<LastTable> retrieveLastTable(){
        logger.info("retrieveLastTable 메소드 호출");
        return this.sqlSession.selectList("retrieveLastTable");
    }

    public void insertLastTable(LastTable lastTable){
        this.sqlSession.insert("insertLastTable", lastTable);
    }
}
