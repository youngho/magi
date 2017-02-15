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
    public List<LastTable> readAllLastTable(LastTable lastTable);

    /*
    LAST_TABLE merge into
     */
    @Insert("MERGE INTO LAST_TABLE USING DUAL ON (OPERATOR = #{operator})\n" +
            "WHEN MATCHED THEN\n" +
            "      UPDATE\n" +
            "      SET\n" +

            "            SYS_DATE           =#{sysDate},\n" +
            "            TESTER             =#{tester},\n" +
            "            PARTNUMBER         =#{partnumber},\n" +
            "            PROCESS            =#{process},\n" +
            "            MAIN_PGM           =#{mainPgm},\n" +
            "            PGMCNT             =#{pgmcnt},\n" +
            "            SUB_PGM            =#{subPgm},\n" +
            "            GLOBAL             =#{global},\n" +
            "            SBL_YIELD          =#{sblYield},\n" +
            "            SUB_BIN            =#{subBin},\n" +
            "            SUBBIN             =#{subbin},\n" +
            "            NGBIN              =#{ngbin},\n" +
            "            PKG_SIGMOD         =#{pkgSigmod},\n" +
            "            PKG_PARA           =#{pkgPara},\n" +
            "            PKG_DIGIT          =#{pkgDigit},\n" +
            "            PKG_SIGNO          =#{pkgSigno},\n" +
            "            PKG_MEASNO         =#{pkgMeasno},\n" +
            "            FLOW               =#{flow},\n" +
            "            HALT               =#{halt},\n" +
            "            COMMENTS           =#{comments},\n" +
            "            RUN_SBL            =#{runSbl},\n" +
            "            RUN_COUNT          =#{runCount},\n" +
            "            TEMP               =#{temp},\n" +
            "            TEMP_LIMIT         =#{tempLimit},\n" +
            "            PKG_TYPE           =#{pkgType},\n" +
            "            PKG_SIZE           =#{pkgSize},\n" +
            "            PKG_HEIGHT         =#{pkgHeight},\n" +
            "            PKG_PARANUM        =#{pkgParanum},\n" +
            "            SPECIAL_PARA       =#{specialPara},\n" +
            "            RUN_SBL_YIELD      =#{runSblYield},\n" +
            "            LEADFREE           =#{leadfree},\n" +
            "            LOT_MERGE          =#{lotMerge},\n" +
            "            NEW_PRODUCT        =#{newProduct},\n" +
            "            CATE6_1            =#{cate61},\n" +
            "            CATE6_2            =#{cate62},\n" +
            "            CATE6_3            =#{cate63},\n" +
            "            CATE6_4            =#{cate64},\n" +
            "            CATE6_5            =#{cate65},\n" +
            "            CATE7_1            =#{cate71},\n" +
            "            CATE7_2            =#{cate72},\n" +
            "            CATE7_3            =#{cate73},\n" +
            "            CATE7_4            =#{cate74},\n" +
            "            CATE7_5            =#{cate75},\n" +
            "            PRIME_PORTION      =#{primePortion},\n" +
            "            YIELD_SBL          =#{yieldSbl},\n" +
            "            NEW_SUB_BIN        =#{newSubBin},\n" +
            "            T_LOT_SBL          =#{tLotSbl},\n" +
            "            RTS_SUB            =#{rtsSub},\n" +
            "            RTS_NG             =#{rtsNg},\n" +
            "            RTS_YIELD          =#{rtsYield},\n" +
            "            RTS_FLOW           =#{rtsFlow},\n" +
            "            RTS_MIN_YIELD      =#{rtsMinYield},\n" +
            "            RTS_BIN8_MIN_CNT   =#{rtsBin8MinCnt},\n" +
            "            MASK_FLOW          =#{maskFlow},\n" +
            "            MASK_COMMENTS      =#{maskComments},\n" +
            "            EXCEPT_LOT         =#{exceptLot},\n" +
            "            EXCEPT_INPUT_CNT   =#{exceptInputCnt},\n" +
            "            TMS_USING          =#{tmsUsing},\n" +
            "            AQL_BIN            =#{aqlBin},\n" +
            "            NCF_RULE           =#{ncfRule},\n" +
            "            FAIL_SUM           =#{failSum},\n" +
            "            FAIL_SUM_CMD       =#{failSumCmd},\n" +
            "            PGM_MONITOR_CNT    =#{pgmMonitorCnt},\n" +
            "            TEST_CHIP          =#{testChip},\n" +
            "            OPIRUS_MONITOR_CNT =#{opirusMonitorCnt},\n" +
            "            WAFER_SBL          =#{waferSbl},\n" +
            "            WAFER_LIMIT_CNT    =#{waferLimitCnt},\n" +
            "            WAFER_LOT_FILTER   =#{waferLotFilter},\n" +
            "            WAFER_SBL_BIN      =#{waferSblBin},\n" +
            "            S_BIN              =#{sBin},\n" +
            "            SH_PROCESS         =#{shProcess},\n" +
            "            SH_LOTID_1ST       =#{shLotid1st},\n" +
            "            SH_LOTID_2ND       =#{shLotid2nd},\n" +
            "            SH_PROCESS_1ST     =#{shProcess1st},\n" +
            "            SH_PROCESS_2ND     =#{shProcess2nd},\n" +
            "            TEST_TIME          =#{testTime},\n" +
            "            ITEM_COUNT         =#{itemCount},\n" +
            "            MAX_TIME           =#{maxTime},\n" +
            "            WAFER_CI_BIN       =#{waferCiBin},\n" +
            "            PURPOSE_TYPE_CHECK =#{purposeTypeCheck},\n" +
            "            PURPOSE_TYPE_1ST   =#{purposeType1st},\n" +
            "            PURPOSE_PROCESS_1ST=#{purposeProcess1st},\n" +
            "            PURPOSE_TYPE_2ND   =#{purposeType2nd},\n" +
            "            PURPOSE_PROCESS_2ND=#{purposeProcess2nd},\n" +
            "            WAFER_SBL_FLAG     =#{waferSblFlag},\n" +
            "            MULTIUI_FLAG       =#{multiuiFlag},\n" +
            "            FW_NAME_CHECK      =#{fwNameCheck},\n" +
            "            FW1_PGM            =#{fw1Pgm},\n" +
            "            FW_PATCH           =#{fwPatch},\n" +
            "            FW_RC              =#{fwRc},\n" +
            "            FW_RELEASE_DATE    =#{fwReleaseDate},\n" +
            "            FW2_PGM            =#{fw2Pgm},\n" +
            "            FW3_PGM            =#{fw3Pgm},\n" +
            "            RELEASE_DATE_CHECK =#{releaseDateCheck},\n" +
            "            FAB                =#{fab},\n" +
            "            GRADE              =#{grade} WHEN NOT MATCHED THEN\n" +
            "      INSERT\n" +
            "            (\n" +
            "                  OPERATOR,\n" +
            "                  SYS_DATE,\n" +
            "                  TESTER,\n" +
            "                  PARTNUMBER,\n" +
            "                  PROCESS,\n" +
            "                  MAIN_PGM,\n" +
            "                  PGMCNT,\n" +
            "                  SUB_PGM,\n" +
            "                  GLOBAL,\n" +
            "                  SBL_YIELD,\n" +
            "                  SUB_BIN,\n" +
            "                  SUBBIN,\n" +
            "                  NGBIN,\n" +
            "                  PKG_SIGMOD,\n" +
            "                  PKG_PARA,\n" +
            "                  PKG_DIGIT,\n" +
            "                  PKG_SIGNO,\n" +
            "                  PKG_MEASNO,\n" +
            "                  FLOW,\n" +
            "                  HALT,\n" +
            "                  COMMENTS,\n" +
            "                  RUN_SBL,\n" +
            "                  RUN_COUNT,\n" +
            "                  TEMP,\n" +
            "                  TEMP_LIMIT,\n" +
            "                  PKG_TYPE,\n" +
            "                  PKG_SIZE,\n" +
            "                  PKG_HEIGHT,\n" +
            "                  PKG_PARANUM,\n" +
            "                  SPECIAL_PARA,\n" +
            "                  RUN_SBL_YIELD,\n" +
            "                  LEADFREE,\n" +
            "                  LOT_MERGE,\n" +
            "                  NEW_PRODUCT,\n" +
            "                  CATE6_1,\n" +
            "                  CATE6_2,\n" +
            "                  CATE6_3,\n" +
            "                  CATE6_4,\n" +
            "                  CATE6_5,\n" +
            "                  CATE7_1,\n" +
            "                  CATE7_2,\n" +
            "                  CATE7_3,\n" +
            "                  CATE7_4,\n" +
            "                  CATE7_5,\n" +
            "                  PRIME_PORTION,\n" +
            "                  YIELD_SBL,\n" +
            "                  NEW_SUB_BIN,\n" +
            "                  T_LOT_SBL,\n" +
            "                  RTS_SUB,\n" +
            "                  RTS_NG,\n" +
            "                  RTS_YIELD,\n" +
            "                  RTS_FLOW,\n" +
            "                  RTS_MIN_YIELD,\n" +
            "                  RTS_BIN8_MIN_CNT,\n" +
            "                  MASK_FLOW,\n" +
            "                  MASK_COMMENTS,\n" +
            "                  EXCEPT_LOT,\n" +
            "                  EXCEPT_INPUT_CNT,\n" +
            "                  TMS_USING,\n" +
            "                  AQL_BIN,\n" +
            "                  NCF_RULE,\n" +
            "                  FAIL_SUM,\n" +
            "                  FAIL_SUM_CMD,\n" +
            "                  PGM_MONITOR_CNT,\n" +
            "                  TEST_CHIP,\n" +
            "                  OPIRUS_MONITOR_CNT,\n" +
            "                  WAFER_SBL,\n" +
            "                  WAFER_LIMIT_CNT,\n" +
            "                  WAFER_LOT_FILTER,\n" +
            "                  WAFER_SBL_BIN,\n" +
            "                  S_BIN,\n" +
            "                  SH_PROCESS,\n" +
            "                  SH_LOTID_1ST,\n" +
            "                  SH_LOTID_2ND,\n" +
            "                  SH_PROCESS_1ST,\n" +
            "                  SH_PROCESS_2ND,\n" +
            "                  TEST_TIME,\n" +
            "                  ITEM_COUNT,\n" +
            "                  MAX_TIME,\n" +
            "                  WAFER_CI_BIN,\n" +
            "                  PURPOSE_TYPE_CHECK,\n" +
            "                  PURPOSE_TYPE_1ST,\n" +
            "                  PURPOSE_PROCESS_1ST,\n" +
            "                  PURPOSE_TYPE_2ND,\n" +
            "                  PURPOSE_PROCESS_2ND,\n" +
            "                  WAFER_SBL_FLAG,\n" +
            "                  MULTIUI_FLAG,\n" +
            "                  FW_NAME_CHECK,\n" +
            "                  FW1_PGM,\n" +
            "                  FW_PATCH,\n" +
            "                  FW_RC,\n" +
            "                  FW_RELEASE_DATE,\n" +
            "                  FW2_PGM,\n" +
            "                  FW3_PGM,\n" +
            "                  RELEASE_DATE_CHECK,\n" +
            "                  FAB,\n" +
            "                  GRADE\n" +
            "            )\n" +
            "            VALUES\n" +
            "            (\n" +
            "                  #{operator},\n" +
            "                  #{sysDate},\n" +
            "                  #{tester},\n" +
            "                  #{partnumber},\n" +
            "                  #{process},\n" +
            "                  #{mainPgm},\n" +
            "                  #{pgmcnt},\n" +
            "                  #{subPgm},\n" +
            "                  #{global},\n" +
            "                  #{sblYield},\n" +
            "                  #{subBin},\n" +
            "                  #{subbin},\n" +
            "                  #{ngbin},\n" +
            "                  #{pkgSigmod},\n" +
            "                  #{pkgPara},\n" +
            "                  #{pkgDigit},\n" +
            "                  #{pkgSigno},\n" +
            "                  #{pkgMeasno},\n" +
            "                  #{flow},\n" +
            "                  #{halt},\n" +
            "                  #{comments},\n" +
            "                  #{runSbl},\n" +
            "                  #{runCount},\n" +
            "                  #{temp},\n" +
            "                  #{tempLimit},\n" +
            "                  #{pkgType},\n" +
            "                  #{pkgSize},\n" +
            "                  #{pkgHeight},\n" +
            "                  #{pkgParanum},\n" +
            "                  #{specialPara},\n" +
            "                  #{runSblYield},\n" +
            "                  #{leadfree},\n" +
            "                  #{lotMerge},\n" +
            "                  #{newProduct},\n" +
            "                  #{cate61},\n" +
            "                  #{cate62},\n" +
            "                  #{cate63},\n" +
            "                  #{cate64},\n" +
            "                  #{cate65},\n" +
            "                  #{cate71},\n" +
            "                  #{cate72},\n" +
            "                  #{cate73},\n" +
            "                  #{cate74},\n" +
            "                  #{cate75},\n" +
            "                  #{primePortion},\n" +
            "                  #{yieldSbl},\n" +
            "                  #{newSubBin},\n" +
            "                  #{tLotSbl},\n" +
            "                  #{rtsSub},\n" +
            "                  #{rtsNg},\n" +
            "                  #{rtsYield},\n" +
            "                  #{rtsFlow},\n" +
            "                  #{rtsMinYield},\n" +
            "                  #{rtsBin8MinCnt},\n" +
            "                  #{maskFlow},\n" +
            "                  #{maskComments},\n" +
            "                  #{exceptLot},\n" +
            "                  #{exceptInputCnt},\n" +
            "                  #{tmsUsing},\n" +
            "                  #{aqlBin},\n" +
            "                  #{ncfRule},\n" +
            "                  #{failSum},\n" +
            "                  #{failSumCmd},\n" +
            "                  #{pgmMonitorCnt},\n" +
            "                  #{testChip},\n" +
            "                  #{opirusMonitorCnt},\n" +
            "                  #{waferSbl},\n" +
            "                  #{waferLimitCnt},\n" +
            "                  #{waferLotFilter},\n" +
            "                  #{waferSblBin},\n" +
            "                  #{sBin},\n" +
            "                  #{shProcess},\n" +
            "                  #{shLotid1st},\n" +
            "                  #{shLotid2nd},\n" +
            "                  #{shProcess1st},\n" +
            "                  #{shProcess2nd},\n" +
            "                  #{testTime},\n" +
            "                  #{itemCount},\n" +
            "                  #{maxTime},\n" +
            "                  #{waferCiBin},\n" +
            "                  #{purposeTypeCheck},\n" +
            "                  #{purposeType1st},\n" +
            "                  #{purposeProcess1st},\n" +
            "                  #{purposeType2nd},\n" +
            "                  #{purposeProcess2nd},\n" +
            "                  #{waferSblFlag},\n" +
            "                  #{multiuiFlag},\n" +
            "                  #{fwNameCheck},\n" +
            "                  #{fw1Pgm},\n" +
            "                  #{fwPatch},\n" +
            "                  #{fwRc},\n" +
            "                  #{fwReleaseDate},\n" +
            "                  #{fw2Pgm},\n" +
            "                  #{fw3Pgm},\n" +
            "                  #{releaseDateCheck},\n" +
            "                  #{fab},\n" +
            "                  #{grade}\n" +
            "            )")
    public void insertLastTable(LastTable lastTable);
}
