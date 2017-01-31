package kr.famos.base.domain;

/**
 * Created by yhkim on 2017-01-31.
 */
public class TestYieldHistErr {
    private String finalSubCnt2 = "";    // FINAL SUB BIN CNT2
    private String ngCnt1 = "";    // NG BIN CNT1
    private String ngCnt2 = "";    // NG BIN CNT2
    private String finalNgCnt1 = "";    // FINAL NG BIN CNT1
    private String finalNgCnt2 = "";    // FINAL NG BIN CNT1
    private String subProgramName = "";    // SUB PROGRAM NAME
    private String initialBadBlock = "";    // INITIAL BAD BLOCK
    private String finalBadBlock = "";    // FINAL BAD BLOCK
    private String gapIbbfbb = "";    // GAP IBBFBB
    private String mLotList = "";    // M LOT LIST
    private String recycleFlag = "";    // RECYCLE FLAG
    private String sblCode = "";    // SBL CODE
    private String sblJudge = "";    // SBL 판정
    private String dataFormat = "";    // DATA FORMAT
    private String sblCmd = "";    // SBL CMD
    private String runSblCode = "";    // RUN SBL CODE
    private String runSblCmd = "";    // RUN SBL CMD
    private String hOsA = "";    //
    private String hOsB = "";    //
    private String tOsOpsys = "";    //
    private String tOsAtl = "";    //
    private String tOsDiag = "";    //
    private String tOsSysos = "";    //
    private String tOsGpib = "";    //
    private String tIf = "";    //
    private String fsstFlag = "";    //
    private String frLot = "";    //
    private int subbin114 = 0;    //
    private int finalSubbin114 = 0;    //
    private int subbin115 = 0;    // SUB BIN 115
    private int finalSubbin115 = 0;    // FINAL SUB BIN 115
    private int subbin116 = 0;    // SUB BIN 116
    private int finalSubbin116 = 0;    // FINAL SUB BIN 116
    private String purposeType = "";    //
    private String sysDate = "";    // Update 날짜
    private String lotNumber = "";    // LOTID
    private String processName = "";    // PROCESS
    private String productName = "";    // PRODUCT
    private String programName = "";    // PROGRAM
    private String operatorName = "";    // 사용자
    private String testerName = "";    // TESTER NAME
    private String testerNumber = "";    // TESTER ID
    private String testerHead = "";    // TESTER HEAD
    private String hdModel = "";    // HANDLER MODEL
    private String hdTemp = "";    // HANDLER TEMP
    private String boardId = "";    // BOARD ID
    private String line = "";    // LINE
    private String site = "";    // SITE
    private String lotType = "";    // LOT TYPE
    private String retestCount = "";    // RETEST CNT
    private String finalRetestCount = "";    // FINAL RETEST CNT
    private String yield = "";    // YIELD
    private int simaxInqty = 0;    // SIMAX QTY (전산수량)
    private int testCount = 0;    // TEST CNT
    private int passCount = 0;    // PASS CNT
    private int category01 = 0;    // CATEGORY BIN 1~9
    private int category02 = 0;    // CATEGORY BIN 1~9
    private int category03 = 0;    // CATEGORY BIN 1~9
    private int category04 = 0;    // CATEGORY BIN 1~9
    private int category05 = 0;    // CATEGORY BIN 1~9
    private int category06 = 0;    // CATEGORY BIN 1~9
    private int category07 = 0;    // CATEGORY BIN 1~9
    private int category08 = 0;    // CATEGORY BIN 1~9
    private int category09 = 0;    // CATEGORY BIN 1~9
    private String startDate = "";    // START DATE
    private String startTime = "";    // START TIME
    private String endDate = "";    // END DATE
    private String endTime = "";    // END TIME
    private String executeDate = "";    // EXCUTE DATE
    private int opInput = 0;    // OP CNT
    private int opCat1 = 0;    // OP BIN 1~9
    private int opCat2 = 0;    // OP BIN 1~9
    private int opCat3 = 0;    // OP BIN 1~9
    private int opCat4 = 0;    // OP BIN 1~9
    private int opCat5 = 0;    // OP BIN 1~9
    private int opCat6 = 0;    // OP BIN 1~9
    private int opCat7 = 0;    // OP BIN 1~9
    private int opCat8 = 0;    // OP BIN 1~9
    private int opCat9 = 0;    // OP BIN 1~9
    private int sortInput = 0;    // SORT CNT
    private int sort01 = 0;    // SORT BIN 1~8
    private int sort02 = 0;    // SORT BIN 1~8
    private int sort03 = 0;    // SORT BIN 1~8
    private int sort04 = 0;    // SORT BIN 1~8
    private int sort05 = 0;    // SORT BIN 1~8
    private int sort06 = 0;    // SORT BIN 1~8
    private int sort07 = 0;    // SORT BIN 1~8
    private int sort08 = 0;    // SORT BIN 1~8
    private int hdInput = 0;    // HD CNT
    private int hdCat1 = 0;    // HD BIN 1~8
    private int hdCat2 = 0;    // HD BIN 1~8
    private int hdCat3 = 0;    // HD BIN 1~8
    private int hdCat4 = 0;    // HD BIN 1~8
    private int hdCat5 = 0;    // HD BIN 1~8
    private int hdCat6 = 0;    // HD BIN 1~8
    private int hdCat7 = 0;    // HD BIN 1~8
    private int hdCat8 = 0;    // HD BIN 1~8
    private String cat61 = "";    // CAT6_1
    private String cat62 = "";    // CAT6_2
    private String cat63 = "";    // CAT6_3
    private String cat64 = "";    // CAT6_4
    private String cat65 = "";    // CAT6_5
    private String cat71 = "";    // CAT7_1
    private String cat72 = "";    // CAT7_2
    private String cat73 = "";    // CAT7_3
    private String cat74 = "";    // CAT7_4
    private String cat75 = "";    // CAT7_5
    private String revno = "";    // REVNO
    private String revnoEnd = "";    // REVNO END
    private String lotin = "";    // LOTIN  시간
    private String lotout = "";    // LOTOUT 시간
    private String subCnt1 = "";    // SUB BIN CNT1
    private String subCnt2 = "";    // SUB BIN CNT2
    private String finalSubCnt1 = "";    // FINAL SUB BIN CNT1

    public String getFinalSubCnt2() {
        return finalSubCnt2;
    }

    public void setFinalSubCnt2(String finalSubCnt2) {
        this.finalSubCnt2 = finalSubCnt2;
    }

    public String getNgCnt1() {
        return ngCnt1;
    }

    public void setNgCnt1(String ngCnt1) {
        this.ngCnt1 = ngCnt1;
    }

    public String getNgCnt2() {
        return ngCnt2;
    }

    public void setNgCnt2(String ngCnt2) {
        this.ngCnt2 = ngCnt2;
    }

    public String getFinalNgCnt1() {
        return finalNgCnt1;
    }

    public void setFinalNgCnt1(String finalNgCnt1) {
        this.finalNgCnt1 = finalNgCnt1;
    }

    public String getFinalNgCnt2() {
        return finalNgCnt2;
    }

    public void setFinalNgCnt2(String finalNgCnt2) {
        this.finalNgCnt2 = finalNgCnt2;
    }

    public String getSubProgramName() {
        return subProgramName;
    }

    public void setSubProgramName(String subProgramName) {
        this.subProgramName = subProgramName;
    }

    public String getInitialBadBlock() {
        return initialBadBlock;
    }

    public void setInitialBadBlock(String initialBadBlock) {
        this.initialBadBlock = initialBadBlock;
    }

    public String getFinalBadBlock() {
        return finalBadBlock;
    }

    public void setFinalBadBlock(String finalBadBlock) {
        this.finalBadBlock = finalBadBlock;
    }

    public String getGapIbbfbb() {
        return gapIbbfbb;
    }

    public void setGapIbbfbb(String gapIbbfbb) {
        this.gapIbbfbb = gapIbbfbb;
    }

    public String getMLotList() {
        return mLotList;
    }

    public void setMLotList(String mLotList) {
        this.mLotList = mLotList;
    }

    public String getRecycleFlag() {
        return recycleFlag;
    }

    public void setRecycleFlag(String recycleFlag) {
        this.recycleFlag = recycleFlag;
    }

    public String getSblCode() {
        return sblCode;
    }

    public void setSblCode(String sblCode) {
        this.sblCode = sblCode;
    }

    public String getSblJudge() {
        return sblJudge;
    }

    public void setSblJudge(String sblJudge) {
        this.sblJudge = sblJudge;
    }

    public String getDataFormat() {
        return dataFormat;
    }

    public void setDataFormat(String dataFormat) {
        this.dataFormat = dataFormat;
    }

    public String getSblCmd() {
        return sblCmd;
    }

    public void setSblCmd(String sblCmd) {
        this.sblCmd = sblCmd;
    }

    public String getRunSblCode() {
        return runSblCode;
    }

    public void setRunSblCode(String runSblCode) {
        this.runSblCode = runSblCode;
    }

    public String getRunSblCmd() {
        return runSblCmd;
    }

    public void setRunSblCmd(String runSblCmd) {
        this.runSblCmd = runSblCmd;
    }

    public String getHOsA() {
        return hOsA;
    }

    public void setHOsA(String hOsA) {
        this.hOsA = hOsA;
    }

    public String getHOsB() {
        return hOsB;
    }

    public void setHOsB(String hOsB) {
        this.hOsB = hOsB;
    }

    public String getTOsOpsys() {
        return tOsOpsys;
    }

    public void setTOsOpsys(String tOsOpsys) {
        this.tOsOpsys = tOsOpsys;
    }

    public String getTOsAtl() {
        return tOsAtl;
    }

    public void setTOsAtl(String tOsAtl) {
        this.tOsAtl = tOsAtl;
    }

    public String getTOsDiag() {
        return tOsDiag;
    }

    public void setTOsDiag(String tOsDiag) {
        this.tOsDiag = tOsDiag;
    }

    public String getTOsSysos() {
        return tOsSysos;
    }

    public void setTOsSysos(String tOsSysos) {
        this.tOsSysos = tOsSysos;
    }

    public String getTOsGpib() {
        return tOsGpib;
    }

    public void setTOsGpib(String tOsGpib) {
        this.tOsGpib = tOsGpib;
    }

    public String getTIf() {
        return tIf;
    }

    public void setTIf(String tIf) {
        this.tIf = tIf;
    }

    public String getFsstFlag() {
        return fsstFlag;
    }

    public void setFsstFlag(String fsstFlag) {
        this.fsstFlag = fsstFlag;
    }

    public String getFrLot() {
        return frLot;
    }

    public void setFrLot(String frLot) {
        this.frLot = frLot;
    }

    public int getSubbin114() {
        return subbin114;
    }

    public void setSubbin114(int subbin114) {
        this.subbin114 = subbin114;
    }

    public int getFinalSubbin114() {
        return finalSubbin114;
    }

    public void setFinalSubbin114(int finalSubbin114) {
        this.finalSubbin114 = finalSubbin114;
    }

    public int getSubbin115() {
        return subbin115;
    }

    public void setSubbin115(int subbin115) {
        this.subbin115 = subbin115;
    }

    public int getFinalSubbin115() {
        return finalSubbin115;
    }

    public void setFinalSubbin115(int finalSubbin115) {
        this.finalSubbin115 = finalSubbin115;
    }

    public int getSubbin116() {
        return subbin116;
    }

    public void setSubbin116(int subbin116) {
        this.subbin116 = subbin116;
    }

    public int getFinalSubbin116() {
        return finalSubbin116;
    }

    public void setFinalSubbin116(int finalSubbin116) {
        this.finalSubbin116 = finalSubbin116;
    }

    public String getPurposeType() {
        return purposeType;
    }

    public void setPurposeType(String purposeType) {
        this.purposeType = purposeType;
    }

    public String getSysDate() {
        return sysDate;
    }

    public void setSysDate(String sysDate) {
        this.sysDate = sysDate;
    }

    public String getLotNumber() {
        return lotNumber;
    }

    public void setLotNumber(String lotNumber) {
        this.lotNumber = lotNumber;
    }

    public String getProcessName() {
        return processName;
    }

    public void setProcessName(String processName) {
        this.processName = processName;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getOperatorName() {
        return operatorName;
    }

    public void setOperatorName(String operatorName) {
        this.operatorName = operatorName;
    }

    public String getTesterName() {
        return testerName;
    }

    public void setTesterName(String testerName) {
        this.testerName = testerName;
    }

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public String getTesterHead() {
        return testerHead;
    }

    public void setTesterHead(String testerHead) {
        this.testerHead = testerHead;
    }

    public String getHdModel() {
        return hdModel;
    }

    public void setHdModel(String hdModel) {
        this.hdModel = hdModel;
    }

    public String getHdTemp() {
        return hdTemp;
    }

    public void setHdTemp(String hdTemp) {
        this.hdTemp = hdTemp;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getLotType() {
        return lotType;
    }

    public void setLotType(String lotType) {
        this.lotType = lotType;
    }

    public String getRetestCount() {
        return retestCount;
    }

    public void setRetestCount(String retestCount) {
        this.retestCount = retestCount;
    }

    public String getFinalRetestCount() {
        return finalRetestCount;
    }

    public void setFinalRetestCount(String finalRetestCount) {
        this.finalRetestCount = finalRetestCount;
    }

    public String getYield() {
        return yield;
    }

    public void setYield(String yield) {
        this.yield = yield;
    }

    public int getSimaxInqty() {
        return simaxInqty;
    }

    public void setSimaxInqty(int simaxInqty) {
        this.simaxInqty = simaxInqty;
    }

    public int getTestCount() {
        return testCount;
    }

    public void setTestCount(int testCount) {
        this.testCount = testCount;
    }

    public int getPassCount() {
        return passCount;
    }

    public void setPassCount(int passCount) {
        this.passCount = passCount;
    }

    public int getCategory01() {
        return category01;
    }

    public void setCategory01(int category01) {
        this.category01 = category01;
    }

    public int getCategory02() {
        return category02;
    }

    public void setCategory02(int category02) {
        this.category02 = category02;
    }

    public int getCategory03() {
        return category03;
    }

    public void setCategory03(int category03) {
        this.category03 = category03;
    }

    public int getCategory04() {
        return category04;
    }

    public void setCategory04(int category04) {
        this.category04 = category04;
    }

    public int getCategory05() {
        return category05;
    }

    public void setCategory05(int category05) {
        this.category05 = category05;
    }

    public int getCategory06() {
        return category06;
    }

    public void setCategory06(int category06) {
        this.category06 = category06;
    }

    public int getCategory07() {
        return category07;
    }

    public void setCategory07(int category07) {
        this.category07 = category07;
    }

    public int getCategory08() {
        return category08;
    }

    public void setCategory08(int category08) {
        this.category08 = category08;
    }

    public int getCategory09() {
        return category09;
    }

    public void setCategory09(int category09) {
        this.category09 = category09;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getExecuteDate() {
        return executeDate;
    }

    public void setExecuteDate(String executeDate) {
        this.executeDate = executeDate;
    }

    public int getOpInput() {
        return opInput;
    }

    public void setOpInput(int opInput) {
        this.opInput = opInput;
    }

    public int getOpCat1() {
        return opCat1;
    }

    public void setOpCat1(int opCat1) {
        this.opCat1 = opCat1;
    }

    public int getOpCat2() {
        return opCat2;
    }

    public void setOpCat2(int opCat2) {
        this.opCat2 = opCat2;
    }

    public int getOpCat3() {
        return opCat3;
    }

    public void setOpCat3(int opCat3) {
        this.opCat3 = opCat3;
    }

    public int getOpCat4() {
        return opCat4;
    }

    public void setOpCat4(int opCat4) {
        this.opCat4 = opCat4;
    }

    public int getOpCat5() {
        return opCat5;
    }

    public void setOpCat5(int opCat5) {
        this.opCat5 = opCat5;
    }

    public int getOpCat6() {
        return opCat6;
    }

    public void setOpCat6(int opCat6) {
        this.opCat6 = opCat6;
    }

    public int getOpCat7() {
        return opCat7;
    }

    public void setOpCat7(int opCat7) {
        this.opCat7 = opCat7;
    }

    public int getOpCat8() {
        return opCat8;
    }

    public void setOpCat8(int opCat8) {
        this.opCat8 = opCat8;
    }

    public int getOpCat9() {
        return opCat9;
    }

    public void setOpCat9(int opCat9) {
        this.opCat9 = opCat9;
    }

    public int getSortInput() {
        return sortInput;
    }

    public void setSortInput(int sortInput) {
        this.sortInput = sortInput;
    }

    public int getSort01() {
        return sort01;
    }

    public void setSort01(int sort01) {
        this.sort01 = sort01;
    }

    public int getSort02() {
        return sort02;
    }

    public void setSort02(int sort02) {
        this.sort02 = sort02;
    }

    public int getSort03() {
        return sort03;
    }

    public void setSort03(int sort03) {
        this.sort03 = sort03;
    }

    public int getSort04() {
        return sort04;
    }

    public void setSort04(int sort04) {
        this.sort04 = sort04;
    }

    public int getSort05() {
        return sort05;
    }

    public void setSort05(int sort05) {
        this.sort05 = sort05;
    }

    public int getSort06() {
        return sort06;
    }

    public void setSort06(int sort06) {
        this.sort06 = sort06;
    }

    public int getSort07() {
        return sort07;
    }

    public void setSort07(int sort07) {
        this.sort07 = sort07;
    }

    public int getSort08() {
        return sort08;
    }

    public void setSort08(int sort08) {
        this.sort08 = sort08;
    }

    public int getHdInput() {
        return hdInput;
    }

    public void setHdInput(int hdInput) {
        this.hdInput = hdInput;
    }

    public int getHdCat1() {
        return hdCat1;
    }

    public void setHdCat1(int hdCat1) {
        this.hdCat1 = hdCat1;
    }

    public int getHdCat2() {
        return hdCat2;
    }

    public void setHdCat2(int hdCat2) {
        this.hdCat2 = hdCat2;
    }

    public int getHdCat3() {
        return hdCat3;
    }

    public void setHdCat3(int hdCat3) {
        this.hdCat3 = hdCat3;
    }

    public int getHdCat4() {
        return hdCat4;
    }

    public void setHdCat4(int hdCat4) {
        this.hdCat4 = hdCat4;
    }

    public int getHdCat5() {
        return hdCat5;
    }

    public void setHdCat5(int hdCat5) {
        this.hdCat5 = hdCat5;
    }

    public int getHdCat6() {
        return hdCat6;
    }

    public void setHdCat6(int hdCat6) {
        this.hdCat6 = hdCat6;
    }

    public int getHdCat7() {
        return hdCat7;
    }

    public void setHdCat7(int hdCat7) {
        this.hdCat7 = hdCat7;
    }

    public int getHdCat8() {
        return hdCat8;
    }

    public void setHdCat8(int hdCat8) {
        this.hdCat8 = hdCat8;
    }

    public String getCat61() {
        return cat61;
    }

    public void setCat61(String cat61) {
        this.cat61 = cat61;
    }

    public String getCat62() {
        return cat62;
    }

    public void setCat62(String cat62) {
        this.cat62 = cat62;
    }

    public String getCat63() {
        return cat63;
    }

    public void setCat63(String cat63) {
        this.cat63 = cat63;
    }

    public String getCat64() {
        return cat64;
    }

    public void setCat64(String cat64) {
        this.cat64 = cat64;
    }

    public String getCat65() {
        return cat65;
    }

    public void setCat65(String cat65) {
        this.cat65 = cat65;
    }

    public String getCat71() {
        return cat71;
    }

    public void setCat71(String cat71) {
        this.cat71 = cat71;
    }

    public String getCat72() {
        return cat72;
    }

    public void setCat72(String cat72) {
        this.cat72 = cat72;
    }

    public String getCat73() {
        return cat73;
    }

    public void setCat73(String cat73) {
        this.cat73 = cat73;
    }

    public String getCat74() {
        return cat74;
    }

    public void setCat74(String cat74) {
        this.cat74 = cat74;
    }

    public String getCat75() {
        return cat75;
    }

    public void setCat75(String cat75) {
        this.cat75 = cat75;
    }

    public String getRevno() {
        return revno;
    }

    public void setRevno(String revno) {
        this.revno = revno;
    }

    public String getRevnoEnd() {
        return revnoEnd;
    }

    public void setRevnoEnd(String revnoEnd) {
        this.revnoEnd = revnoEnd;
    }

    public String getLotin() {
        return lotin;
    }

    public void setLotin(String lotin) {
        this.lotin = lotin;
    }

    public String getLotout() {
        return lotout;
    }

    public void setLotout(String lotout) {
        this.lotout = lotout;
    }

    public String getSubCnt1() {
        return subCnt1;
    }

    public void setSubCnt1(String subCnt1) {
        this.subCnt1 = subCnt1;
    }

    public String getSubCnt2() {
        return subCnt2;
    }

    public void setSubCnt2(String subCnt2) {
        this.subCnt2 = subCnt2;
    }

    public String getFinalSubCnt1() {
        return finalSubCnt1;
    }

    public void setFinalSubCnt1(String finalSubCnt1) {
        this.finalSubCnt1 = finalSubCnt1;
    }

}
