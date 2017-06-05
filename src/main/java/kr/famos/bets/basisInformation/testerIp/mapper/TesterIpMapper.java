package kr.famos.bets.basisInformation.testerIp.mapper;

import kr.famos.bets.basisInformation.testerIp.dto.TesterIpDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-21.
 */
@Mapper
public interface TesterIpMapper {

    List<TesterIpDto> retrieveTesterIp(TesterIpDto testerIpDto);

//    TesterIpDto retrieveBinDescriptionByKey(TesterIpDto testerIpDto);

//    void insertBinDescription(TesterIpDto testerIpDto);
/*    @Autowired
    private SqlSession sqlSession;

    public BinDescriptionMapper(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }*/


//    public List<BinDescription> retrieveBinDescription(BinDescription binDescription) {
//        logger.info("BinDescriptionDao - retrieveBinDescription 메소드 호출");
//        return this.sqlSession.selectList("retrieveBinDescription", binDescription);
//    }
//
//
//    public void insertBinDescription(BinDescription binDescription) {
//        this.sqlSession.insert("insertBinDescription", binDescription);
//    }
}
