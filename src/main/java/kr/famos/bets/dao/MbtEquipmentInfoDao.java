package kr.famos.bets.dao;

import kr.famos.bets.domain.MbtEquipmentInfo;
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
public class MbtEquipmentInfoDao {
    private static final Logger logger = LoggerFactory.getLogger(MbtEquipmentInfoDao.class);

    @Autowired
    private SqlSession sqlSession;

    public MbtEquipmentInfoDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<MbtEquipmentInfo> retrieveMbtEquipmentInfo(){
        logger.info("retrieveMbtEquipmentInfo 메소드 호출");
        return this.sqlSession.selectList("retrieveMbtEquipmentInfo");
    }
}
