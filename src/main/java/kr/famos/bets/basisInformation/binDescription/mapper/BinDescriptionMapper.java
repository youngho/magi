package kr.famos.bets.basisInformation.binDescription.mapper;

import kr.famos.bets.basisInformation.binDescription.dto.BinDescriptionDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by yhkim on 2017-02-21.
 */
@Mapper
public interface BinDescriptionMapper {

    List<BinDescriptionDto> retrieveBinDescription(BinDescriptionDto binDescriptionDto);

    BinDescriptionDto retrieveBinDescriptionByKey(BinDescriptionDto binDescriptionDto);

    void insertBinDescription(BinDescriptionDto binDescriptionDto);
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
