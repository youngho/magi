package kr.famos.bets.dao;

import kr.famos.bets.domain.BinDescription;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yhkim on 2017-02-21.
 */
@Component
public class BinDescriptionDao {
    private static final Logger logger = LoggerFactory.getLogger(BinDescriptionDao.class);

    @Autowired
    private SqlSession sqlSession;

    public BinDescriptionDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }


    public List<BinDescription> retrieveBinDescription(BinDescription binDescription) {
        logger.info("BinDescriptionDao - retrieveBinDescription 메소드 호출");

        List<BinDescription> myList = new ArrayList<BinDescription>();

        //return this.sqlSession.selectList("retrieveBinDescription", binDescription);

        try {
            myList = this.sqlSession.selectList("retrieveBinDescription", binDescription);
            logger.debug("Dao 조회 결과" + myList.get(0).getMainProgramName());
        }catch (Exception e){
            e.printStackTrace();
        }

        return myList;
    }


    public void insertBinDescription(BinDescription binDescription) {
        this.sqlSession.insert("insertBinDescription", binDescription);
    }
}
