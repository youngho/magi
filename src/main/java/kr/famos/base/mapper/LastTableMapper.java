package kr.famos.base.mapper;

import kr.famos.base.domain.LastTable;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by yhkim on 2017-01-31.
 */
@Mapper
public interface LastTableMapper {
@Select("SELECT * FROM LAST_TABLE WHERE ROWNUM < 6")
    public List<LastTable> readAllLastTable();

    @Insert("INSERT\n" +
            "INTO\n" +
            "      LAST_TABLE\n" +
            "      (\n" +
            "            OPERATOR,\n" +
            "            SYS_DATE\n" +

            "      )\n" +
            "      VALUES\n" +
            "      (\n" +
            "            #{operator},\n" +
            "            #{sysDate}\n" +

            "      )")
    public void insertLastTable(LastTable lastTable);
}
