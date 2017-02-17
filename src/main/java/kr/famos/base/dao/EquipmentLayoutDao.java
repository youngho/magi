package kr.famos.base.dao;

import kr.famos.base.domain.EquipmentLayout;
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
public class EquipmentLayoutDao {
    private static final Logger logger = LoggerFactory.getLogger(EquipmentLayoutDao.class);

    @Autowired
    private SqlSession sqlSession;

    public EquipmentLayoutDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<EquipmentLayout> retrieveEquipmentLayout(){
        logger.info("retrieveEquipmentLayout 메소드 호출");
        return this.sqlSession.selectList("retrieveEquipmentLayout");
    }
}
