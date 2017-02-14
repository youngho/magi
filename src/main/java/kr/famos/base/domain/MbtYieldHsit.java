package kr.famos.base.domain;

/**
 * Created by yhkim on 2017-01-31.
 */
public class MbtYieldHsit {
    private String deviceName = "";    // DEVICE_NAME
    private String machineName = "";    // MACHINE_NAME
    private String machineNo = "";    // MACHINE_NO
    private String batchNo = "";    // BATCH_NO
    private String lotName = "";    // LOT_NAME
    private String endDate = "";    // 종료시간
    private String endTime = "";    // 종료시간
    private String boardType = "";    // BOARD_TYPE
    private String boardCount = "";    // BOARD_COUNT
    private String pgmName = "";    // PGM_NAME
    private String operatorId = "";    // OPERATOR_ID
    private int inputSum = 0;    // INPUT_SUM
    private String sysDate = "";    // SYS_DATE
    private int sortCountNm = 0;    // SORT_COUNT_NM
    private int sortCount00 = 0;    // SORT_COUNT_00
    private int sortCount01 = 0;    // SORT_COUNT_01
    private int sortCount02 = 0;    // SORT_COUNT_02
    private int sortCount03 = 0;    // SORT_COUNT_03
    private int sortCount04 = 0;    // SORT_COUNT_04
    private int sortCount05 = 0;    // SORT_COUNT_05
    private int sortCount06 = 0;    // SORT_COUNT_06
    private int sortCount07 = 0;    // SORT_COUNT_07
    private int sortCount08 = 0;    // SORT_COUNT_08
    private int binCount00 = 0;    // BIN_COUNT_00
    private int binCount01 = 0;    // BIN_COUNT_01
    private int binCount02 = 0;    // BIN_COUNT_02
    private int binCount03 = 0;    // BIN_COUNT_03
    private int binCount04 = 0;    // BIN_COUNT_04
    private int binCount05 = 0;    // BIN_COUNT_05
    private int binCount06 = 0;    // BIN_COUNT_06
    private int binCount07 = 0;    // BIN_COUNT_07
    private int binCount08 = 0;    // BIN_COUNT_08
    private int binCount09 = 0;    // BIN_COUNT_09
    private int binCount10 = 0;    // BIN_COUNT_10
    private int binCount11 = 0;    // BIN_COUNT_11
    private int binCount12 = 0;    // BIN_COUNT_12
    private int binCount13 = 0;    // BIN_COUNT_13
    private int binCount14 = 0;    // BIN_COUNT_14
    private int binCount15 = 0;    // BIN_COUNT_15
    private String flag = "";    // FLAG
    private int rebiBin = 0;    // REBI_BIN
    private String yield = "";    // 수율
    private int cpQty = 0;    // CP_QTY
    private int cfQty = 0;    // CF_QTY
    private String partNo = "";    // PART_NO
    private String subbin = "";    // SUBBIN
    private String refYield = "";    // REF_YIELD
    private String inQty = "";    // IN_QTY
    private String shPgm = "";    // SH_PGM
    private String bfpFile = "";    // BFP_FILE
    private int biCount = 0;    // BI_COUNT
    private String sblDecision = "";    // SBL_DECISION
    private String systemId = "";    // SYSTEM_ID
    private String pgmCode = "";    // PGM_CODE
    private String socketNo = "";    // SOCKET_NO
    private String bITime = "";    // B_I_TIME
    private String runMode = "";    // RUN_MODE
    private String esbl = "";    // ESBL
    private String esel = "";    // ESEL
    private String epgm = "";    // EPGM
    private String mGroup = "";    // M_GROUP
    private String runId = "";    // RUN_ID
    private String abFlag = "";    // AB_FLAG
    private String abnormalRun = "";    // ABNORMAL_RUN
    private String sblGubun = "";    // SBL_GUBUN
    private String nctCode = "";    // NCT_CODE
    private String site = "";    // -
    private String pgmRevno = "";    // PGM_REVNO
    private String holdFlag = "";    // HOLD_FLAG
    private String executeDate = "";    // EXECUTE_DATE
    private String subbinSbl = "";    // SUBBIN_SBL
    private String step = "";    // STEP
    private String sblYld = "";    // SBL 수율

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    public String getMachineName() {
        return machineName;
    }

    public void setMachineName(String machineName) {
        this.machineName = machineName;
    }

    public String getMachineNo() {
        return machineNo;
    }

    public void setMachineNo(String machineNo) {
        this.machineNo = machineNo;
    }

    public String getBatchNo() {
        return batchNo;
    }

    public void setBatchNo(String batchNo) {
        this.batchNo = batchNo;
    }

    public String getLotName() {
        return lotName;
    }

    public void setLotName(String lotName) {
        this.lotName = lotName;
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

    public String getBoardType() {
        return boardType;
    }

    public void setBoardType(String boardType) {
        this.boardType = boardType;
    }

    public String getBoardCount() {
        return boardCount;
    }

    public void setBoardCount(String boardCount) {
        this.boardCount = boardCount;
    }

    public String getPgmName() {
        return pgmName;
    }

    public void setPgmName(String pgmName) {
        this.pgmName = pgmName;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public int getInputSum() {
        return inputSum;
    }

    public void setInputSum(int inputSum) {
        this.inputSum = inputSum;
    }

    public String getSysDate() {
        return sysDate;
    }

    public void setSysDate(String sysDate) {
        this.sysDate = sysDate;
    }

    public int getSortCountNm() {
        return sortCountNm;
    }

    public void setSortCountNm(int sortCountNm) {
        this.sortCountNm = sortCountNm;
    }

    public int getSortCount00() {
        return sortCount00;
    }

    public void setSortCount00(int sortCount00) {
        this.sortCount00 = sortCount00;
    }

    public int getSortCount01() {
        return sortCount01;
    }

    public void setSortCount01(int sortCount01) {
        this.sortCount01 = sortCount01;
    }

    public int getSortCount02() {
        return sortCount02;
    }

    public void setSortCount02(int sortCount02) {
        this.sortCount02 = sortCount02;
    }

    public int getSortCount03() {
        return sortCount03;
    }

    public void setSortCount03(int sortCount03) {
        this.sortCount03 = sortCount03;
    }

    public int getSortCount04() {
        return sortCount04;
    }

    public void setSortCount04(int sortCount04) {
        this.sortCount04 = sortCount04;
    }

    public int getSortCount05() {
        return sortCount05;
    }

    public void setSortCount05(int sortCount05) {
        this.sortCount05 = sortCount05;
    }

    public int getSortCount06() {
        return sortCount06;
    }

    public void setSortCount06(int sortCount06) {
        this.sortCount06 = sortCount06;
    }

    public int getSortCount07() {
        return sortCount07;
    }

    public void setSortCount07(int sortCount07) {
        this.sortCount07 = sortCount07;
    }

    public int getSortCount08() {
        return sortCount08;
    }

    public void setSortCount08(int sortCount08) {
        this.sortCount08 = sortCount08;
    }

    public int getBinCount00() {
        return binCount00;
    }

    public void setBinCount00(int binCount00) {
        this.binCount00 = binCount00;
    }

    public int getBinCount01() {
        return binCount01;
    }

    public void setBinCount01(int binCount01) {
        this.binCount01 = binCount01;
    }

    public int getBinCount02() {
        return binCount02;
    }

    public void setBinCount02(int binCount02) {
        this.binCount02 = binCount02;
    }

    public int getBinCount03() {
        return binCount03;
    }

    public void setBinCount03(int binCount03) {
        this.binCount03 = binCount03;
    }

    public int getBinCount04() {
        return binCount04;
    }

    public void setBinCount04(int binCount04) {
        this.binCount04 = binCount04;
    }

    public int getBinCount05() {
        return binCount05;
    }

    public void setBinCount05(int binCount05) {
        this.binCount05 = binCount05;
    }

    public int getBinCount06() {
        return binCount06;
    }

    public void setBinCount06(int binCount06) {
        this.binCount06 = binCount06;
    }

    public int getBinCount07() {
        return binCount07;
    }

    public void setBinCount07(int binCount07) {
        this.binCount07 = binCount07;
    }

    public int getBinCount08() {
        return binCount08;
    }

    public void setBinCount08(int binCount08) {
        this.binCount08 = binCount08;
    }

    public int getBinCount09() {
        return binCount09;
    }

    public void setBinCount09(int binCount09) {
        this.binCount09 = binCount09;
    }

    public int getBinCount10() {
        return binCount10;
    }

    public void setBinCount10(int binCount10) {
        this.binCount10 = binCount10;
    }

    public int getBinCount11() {
        return binCount11;
    }

    public void setBinCount11(int binCount11) {
        this.binCount11 = binCount11;
    }

    public int getBinCount12() {
        return binCount12;
    }

    public void setBinCount12(int binCount12) {
        this.binCount12 = binCount12;
    }

    public int getBinCount13() {
        return binCount13;
    }

    public void setBinCount13(int binCount13) {
        this.binCount13 = binCount13;
    }

    public int getBinCount14() {
        return binCount14;
    }

    public void setBinCount14(int binCount14) {
        this.binCount14 = binCount14;
    }

    public int getBinCount15() {
        return binCount15;
    }

    public void setBinCount15(int binCount15) {
        this.binCount15 = binCount15;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public int getRebiBin() {
        return rebiBin;
    }

    public void setRebiBin(int rebiBin) {
        this.rebiBin = rebiBin;
    }

    public String getYield() {
        return yield;
    }

    public void setYield(String yield) {
        this.yield = yield;
    }

    public int getCpQty() {
        return cpQty;
    }

    public void setCpQty(int cpQty) {
        this.cpQty = cpQty;
    }

    public int getCfQty() {
        return cfQty;
    }

    public void setCfQty(int cfQty) {
        this.cfQty = cfQty;
    }

    public String getPartNo() {
        return partNo;
    }

    public void setPartNo(String partNo) {
        this.partNo = partNo;
    }

    public String getSubbin() {
        return subbin;
    }

    public void setSubbin(String subbin) {
        this.subbin = subbin;
    }

    public String getRefYield() {
        return refYield;
    }

    public void setRefYield(String refYield) {
        this.refYield = refYield;
    }

    public String getInQty() {
        return inQty;
    }

    public void setInQty(String inQty) {
        this.inQty = inQty;
    }

    public String getShPgm() {
        return shPgm;
    }

    public void setShPgm(String shPgm) {
        this.shPgm = shPgm;
    }

    public String getBfpFile() {
        return bfpFile;
    }

    public void setBfpFile(String bfpFile) {
        this.bfpFile = bfpFile;
    }

    public int getBiCount() {
        return biCount;
    }

    public void setBiCount(int biCount) {
        this.biCount = biCount;
    }

    public String getSblDecision() {
        return sblDecision;
    }

    public void setSblDecision(String sblDecision) {
        this.sblDecision = sblDecision;
    }

    public String getSystemId() {
        return systemId;
    }

    public void setSystemId(String systemId) {
        this.systemId = systemId;
    }

    public String getPgmCode() {
        return pgmCode;
    }

    public void setPgmCode(String pgmCode) {
        this.pgmCode = pgmCode;
    }

    public String getSocketNo() {
        return socketNo;
    }

    public void setSocketNo(String socketNo) {
        this.socketNo = socketNo;
    }

    public String getBITime() {
        return bITime;
    }

    public void setBITime(String bITime) {
        this.bITime = bITime;
    }

    public String getRunMode() {
        return runMode;
    }

    public void setRunMode(String runMode) {
        this.runMode = runMode;
    }

    public String getEsbl() {
        return esbl;
    }

    public void setEsbl(String esbl) {
        this.esbl = esbl;
    }

    public String getEsel() {
        return esel;
    }

    public void setEsel(String esel) {
        this.esel = esel;
    }

    public String getEpgm() {
        return epgm;
    }

    public void setEpgm(String epgm) {
        this.epgm = epgm;
    }

    public String getMGroup() {
        return mGroup;
    }

    public void setMGroup(String mGroup) {
        this.mGroup = mGroup;
    }

    public String getRunId() {
        return runId;
    }

    public void setRunId(String runId) {
        this.runId = runId;
    }

    public String getAbFlag() {
        return abFlag;
    }

    public void setAbFlag(String abFlag) {
        this.abFlag = abFlag;
    }

    public String getAbnormalRun() {
        return abnormalRun;
    }

    public void setAbnormalRun(String abnormalRun) {
        this.abnormalRun = abnormalRun;
    }

    public String getSblGubun() {
        return sblGubun;
    }

    public void setSblGubun(String sblGubun) {
        this.sblGubun = sblGubun;
    }

    public String getNctCode() {
        return nctCode;
    }

    public void setNctCode(String nctCode) {
        this.nctCode = nctCode;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getPgmRevno() {
        return pgmRevno;
    }

    public void setPgmRevno(String pgmRevno) {
        this.pgmRevno = pgmRevno;
    }

    public String getHoldFlag() {
        return holdFlag;
    }

    public void setHoldFlag(String holdFlag) {
        this.holdFlag = holdFlag;
    }

    public String getExecuteDate() {
        return executeDate;
    }

    public void setExecuteDate(String executeDate) {
        this.executeDate = executeDate;
    }

    public String getSubbinSbl() {
        return subbinSbl;
    }

    public void setSubbinSbl(String subbinSbl) {
        this.subbinSbl = subbinSbl;
    }

    public String getStep() {
        return step;
    }

    public void setStep(String step) {
        this.step = step;
    }

    public String getSblYld() {
        return sblYld;
    }

    public void setSblYld(String sblYld) {
        this.sblYld = sblYld;
    }

}