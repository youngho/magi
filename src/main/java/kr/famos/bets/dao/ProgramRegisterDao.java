package kr.famos.bets.dao;

import kr.famos.bets.domain.ProgramRegister;
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
public class ProgramRegisterDao {
    private static final Logger logger = LoggerFactory.getLogger(ProgramRegisterDao.class);

    @Autowired
    private SqlSession sqlSession;

    public ProgramRegisterDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<ProgramRegister> retrieveProgramRegister(ProgramRegister programRegister) {
        logger.info("ProgramRegisterDao - retrieveProgramRegister 메소드 호출");
        return this.sqlSession.selectList("retrieveProgramRegister", programRegister);
    }

    public void insertProgramRegister(ProgramRegister programRegister) {
        this.sqlSession.insert("insertProgramRegister", programRegister);
    }
}
