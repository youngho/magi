package kr.famos.bets.domain;

/**
 * Created by yhkim on 2017-01-31.
 */
public class MbtLastTableEvent {
    private String partId = "";    // 제품
    private String directory = "";    // 소스위치
    private String bfpFile = "";    // MAIN 소스이름
    private String tcsFile = "";    // TCS_FILE
    private String deviceName = "";    // DEVICE_NAME
    private String boardType = "";    // BOARD_TYPE
    private String chamberModel = "";    // CHAMBER_MODEL
    private String mcNcf = "";    // MC_NCF
    private String mcNct = "";    // MC_NCT
    private String lotType = "";    // LOT_TYPE
    private String scr1 = "";    // SCR1
    private String scr2 = "";    // SCR2
    private String scr3 = "";    // SCR3
    private String scr4 = "";    // SCR4
    private String pat1 = "";    // PAT1
    private String pat2 = "";    // PAT2
    private String pat3 = "";    // PAT3
    private String pat4 = "";    // PAT4
    private String pat5 = "";    // PAT5
    private String pat6 = "";    // PAT6
    private String pat7 = "";    // PAT7
    private String pat8 = "";    // PAT8
    private String pat9 = "";    // PAT9
    private String pat10 = "";    // PAT10
    private String pat11 = "";    // PAT11
    private String pat12 = "";    // PAT12
    private String pat13 = "";    // PAT13
    private String pat14 = "";    // PAT14
    private String yieldSigma1 = "";    // YIELD_SIGMA1
    private String yieldSigma2 = "";    // YIELD_SIGMA2
    private String contactYield = "";    // CONTACT_YIELD
    private String sort0Sigma1 = "";    // SORT0_SIGMA1
    private String sort2Sigma1 = "";    // SORT2_SIGMA1
    private String sort4Sigma1 = "";    // SORT4_SIGMA1
    private String sort5Sigma1 = "";    // SORT5_SIGMA1
    private String sort6Sigma1 = "";    // SORT6_SIGMA1
    private String sort7Sigma1 = "";    // SORT7_SIGMA1
    private String sort8Sigma1 = "";    // SORT8_SIGMA1
    private int maskLimit = 0;    // MASK_LIMIT
    private int maskRange = 0;    // MASK_RANGE
    private String abnormalFlag = "";    // ABNORMAL_FLAG
    private String userId = "";    // USER_ID
    private String userName = "";    // USER_NAME
    private String sysDate = "";    // SYS_DATE
    private String pat15 = "";    // PAT15
    private String pat16 = "";    // PAT16
    private String pat17 = "";    // PAT17
    private String pat18 = "";    // PAT18
    private String pat19 = "";    // PAT19
    private String pat20 = "";    // PAT20
    private String pat21 = "";    // PAT21
    private String pat22 = "";    // PAT22
    private String pat23 = "";    // PAT23
    private String pat24 = "";    // PAT24
    private String pat25 = "";    // PAT25
    private String pat26 = "";    // PAT26
    private String pat27 = "";    // PAT27
    private String pat28 = "";    // PAT28
    private String pat29 = "";    // PAT29
    private String pat30 = "";    // PAT30
    private String pat31 = "";    // PAT31
    private String pat32 = "";    // PAT32
    private String pat33 = "";    // PAT33
    private String pat34 = "";    // PAT34
    private String pat35 = "";    // PAT35
    private String pat36 = "";    // PAT36
    private String pat37 = "";    // PAT37
    private String pat38 = "";    // PAT38
    private String pat39 = "";    // PAT39
    private String pat40 = "";    // PAT40
    private String pat41 = "";    // PAT41
    private String pat42 = "";    // PAT42
    private String pat43 = "";    // PAT43
    private String pat44 = "";    // PAT44
    private String pat45 = "";    // PAT45
    private String pat46 = "";    // PAT46
    private String pat47 = "";    // PAT47
    private String pat48 = "";    // PAT48
    private String pat49 = "";    // PAT49
    private String pat50 = "";    // PAT50
    private String pat51 = "";    // PAT51
    private String pat52 = "";    // PAT52
    private String pat53 = "";    // PAT53
    private String pat54 = "";    // PAT54
    private String bipNo = "";    // BIP_NO
    private String newProduct = "";    // NEW_PRODUCT
    private String engBin = "";    // ENG_BIN
    private String sh1PortionUp = "";    // SH1_PORTION_UP
    private String sh1PortionDown = "";    // SH1_PORTION_DOWN
    private String sh1NctCode = "";    // SH1_NCT_CODE
    private String sh2PortionUp = "";    // SH2_PORTION_UP
    private String sh2PortionDown = "";    // SH2_PORTION_DOWN
    private String sh2NctCode = "";    // SH2_NCT_CODE
    private String sort0Sigma2 = "";    // SORT0_SIGMA2
    private String sort2Sigma2 = "";    // SORT2_SIGMA2
    private String sort4Sigma2 = "";    // SORT4_SIGMA2
    private String sort5Sigma2 = "";    // SORT5_SIGMA2
    private String sort6Sigma2 = "";    // SORT6_SIGMA2
    private String sort7Sigma2 = "";    // SORT7_SIGMA2
    private String sort8Sigma2 = "";    // SORT8_SIGMA2
    private String eng2Bin = "";    // ENG2_BIN
    private String sh3PortionUp = "";    // SH3_PORTION_UP
    private String sh3PortionDown = "";    // SH3_PORTION_DOWN
    private String sh3NctCode = "";    // SH3_NCT_CODE
    private String sh4PortionUp = "";    // SH4_PORTION_UP
    private String sh4PortionDown = "";    // SH4_PORTION_DOWN
    private String sh4NctCode = "";    // SH4_NCT_CODE
    private String subbinSigma1 = "";    // SUBBIN_SIGMA1
    private String subbinSigma2 = "";    // SUBBIN_SIGMA2
    private String subbinSigma3 = "";    // SUBBIN_SIGMA3
    private String ncfCode = "";    // NCF_CODE
    private String sort3Sigma1 = "";    // SORT3_SIGMA1
    private String sort3Sigma2 = "";    // SORT3_SIGMA2
    private String yieldNctCode1 = "";    // YIELD_NCT_CODE1
    private String yieldNctCode2 = "";    // YIELD_NCT_CODE2
    private String yieldSigma3 = "";    // YIELD_SIGMA3
    private String yieldSigma4 = "";    // YIELD_SIGMA4
    private String yieldNctCode3 = "";    // YIELD_NCT_CODE3
    private String yieldNctCode4 = "";    // YIELD_NCT_CODE4
    private String hardbinSbl0 = "";    // HARDBIN_SBL0
    private String hardbinSbl2 = "";    // HARDBIN_SBL2
    private String hardbinSbl3 = "";    // HARDBIN_SBL3
    private String hardbinSbl4 = "";    // HARDBIN_SBL4
    private String hardbinSbl5 = "";    // HARDBIN_SBL5
    private String hardbinSbl6 = "";    // HARDBIN_SBL6
    private String hardbinSbl7 = "";    // HARDBIN_SBL7
    private String hardbinSbl8 = "";    // HARDBIN_SBL8
    private String subbinSbl1 = "";    // SUBBIN_SBL1
    private String subbinSbl2 = "";    // SUBBIN_SBL2
    private String subbinSbl3 = "";    // SUBBIN_SBL3
    private String subbinSbl4 = "";    // SUBBIN_SBL4
    private String subbinSbl5 = "";    // SUBBIN_SBL5
    private String subbinSbl6 = "";    // SUBBIN_SBL6
    private String subbinSbl7 = "";    // SUBBIN_SBL7
    private String subbinSbl8 = "";    // SUBBIN_SBL8
    private String subbinSbl9 = "";    // SUBBIN_SBL9
    private String subbinSbl10 = "";    // SUBBIN_SBL10
    private String subbinSbl11 = "";    // SUBBIN_SBL11
    private String subbinSbl12 = "";    // SUBBIN_SBL12
    private String subbinSbl13 = "";    // SUBBIN_SBL13
    private String subbinSbl14 = "";    // SUBBIN_SBL14
    private String subbinSbl15 = "";    // SUBBIN_SBL15
    private String subbinSbl16 = "";    // SUBBIN_SBL16
    private String holdFlag = "";    // HOLD_FLAG
    private String runsblFlag = "";    // RUNSBL_FLAG
    private int runsblMinCnt = 0;    // RUNSBL_MIN_CNT
    private String shPgm = "";    // SH_PGM
    private String multichipFlag = "";    // MULTICHIP_FLAG
    private String rebiSblSpec1 = "";    // REBI_SBL_SPEC1
    private String rebiSblSpec2 = "";    // REBI_SBL_SPEC2
    private String step = "";    // STEP
    private String waferSbl = "";    // WAFER_SBL
    private String waferLimitCnt = "";    // WAFER_LIMIT_CNT
    private String waferLotFilter = "";    // WAFER_LOT_FILTER
    private String waferSblBin = "";    // WAFER_SBL_BIN
    private String subNo = "";    // SUB_NO
    private String scsSblSpec = "";    // SCS_SBL_SPEC
    private String waferCi = "";    // WAFER_CI
    private String waferCiBin = "";    // WAFER_CI_BIN
    private String event = "";    //

    public String getPartId() {
        return partId;
    }

    public void setPartId(String partId) {
        this.partId = partId;
    }

    public String getDirectory() {
        return directory;
    }

    public void setDirectory(String directory) {
        this.directory = directory;
    }

    public String getBfpFile() {
        return bfpFile;
    }

    public void setBfpFile(String bfpFile) {
        this.bfpFile = bfpFile;
    }

    public String getTcsFile() {
        return tcsFile;
    }

    public void setTcsFile(String tcsFile) {
        this.tcsFile = tcsFile;
    }

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    public String getBoardType() {
        return boardType;
    }

    public void setBoardType(String boardType) {
        this.boardType = boardType;
    }

    public String getChamberModel() {
        return chamberModel;
    }

    public void setChamberModel(String chamberModel) {
        this.chamberModel = chamberModel;
    }

    public String getMcNcf() {
        return mcNcf;
    }

    public void setMcNcf(String mcNcf) {
        this.mcNcf = mcNcf;
    }

    public String getMcNct() {
        return mcNct;
    }

    public void setMcNct(String mcNct) {
        this.mcNct = mcNct;
    }

    public String getLotType() {
        return lotType;
    }

    public void setLotType(String lotType) {
        this.lotType = lotType;
    }

    public String getScr1() {
        return scr1;
    }

    public void setScr1(String scr1) {
        this.scr1 = scr1;
    }

    public String getScr2() {
        return scr2;
    }

    public void setScr2(String scr2) {
        this.scr2 = scr2;
    }

    public String getScr3() {
        return scr3;
    }

    public void setScr3(String scr3) {
        this.scr3 = scr3;
    }

    public String getScr4() {
        return scr4;
    }

    public void setScr4(String scr4) {
        this.scr4 = scr4;
    }

    public String getPat1() {
        return pat1;
    }

    public void setPat1(String pat1) {
        this.pat1 = pat1;
    }

    public String getPat2() {
        return pat2;
    }

    public void setPat2(String pat2) {
        this.pat2 = pat2;
    }

    public String getPat3() {
        return pat3;
    }

    public void setPat3(String pat3) {
        this.pat3 = pat3;
    }

    public String getPat4() {
        return pat4;
    }

    public void setPat4(String pat4) {
        this.pat4 = pat4;
    }

    public String getPat5() {
        return pat5;
    }

    public void setPat5(String pat5) {
        this.pat5 = pat5;
    }

    public String getPat6() {
        return pat6;
    }

    public void setPat6(String pat6) {
        this.pat6 = pat6;
    }

    public String getPat7() {
        return pat7;
    }

    public void setPat7(String pat7) {
        this.pat7 = pat7;
    }

    public String getPat8() {
        return pat8;
    }

    public void setPat8(String pat8) {
        this.pat8 = pat8;
    }

    public String getPat9() {
        return pat9;
    }

    public void setPat9(String pat9) {
        this.pat9 = pat9;
    }

    public String getPat10() {
        return pat10;
    }

    public void setPat10(String pat10) {
        this.pat10 = pat10;
    }

    public String getPat11() {
        return pat11;
    }

    public void setPat11(String pat11) {
        this.pat11 = pat11;
    }

    public String getPat12() {
        return pat12;
    }

    public void setPat12(String pat12) {
        this.pat12 = pat12;
    }

    public String getPat13() {
        return pat13;
    }

    public void setPat13(String pat13) {
        this.pat13 = pat13;
    }

    public String getPat14() {
        return pat14;
    }

    public void setPat14(String pat14) {
        this.pat14 = pat14;
    }

    public String getYieldSigma1() {
        return yieldSigma1;
    }

    public void setYieldSigma1(String yieldSigma1) {
        this.yieldSigma1 = yieldSigma1;
    }

    public String getYieldSigma2() {
        return yieldSigma2;
    }

    public void setYieldSigma2(String yieldSigma2) {
        this.yieldSigma2 = yieldSigma2;
    }

    public String getContactYield() {
        return contactYield;
    }

    public void setContactYield(String contactYield) {
        this.contactYield = contactYield;
    }

    public String getSort0Sigma1() {
        return sort0Sigma1;
    }

    public void setSort0Sigma1(String sort0Sigma1) {
        this.sort0Sigma1 = sort0Sigma1;
    }

    public String getSort2Sigma1() {
        return sort2Sigma1;
    }

    public void setSort2Sigma1(String sort2Sigma1) {
        this.sort2Sigma1 = sort2Sigma1;
    }

    public String getSort4Sigma1() {
        return sort4Sigma1;
    }

    public void setSort4Sigma1(String sort4Sigma1) {
        this.sort4Sigma1 = sort4Sigma1;
    }

    public String getSort5Sigma1() {
        return sort5Sigma1;
    }

    public void setSort5Sigma1(String sort5Sigma1) {
        this.sort5Sigma1 = sort5Sigma1;
    }

    public String getSort6Sigma1() {
        return sort6Sigma1;
    }

    public void setSort6Sigma1(String sort6Sigma1) {
        this.sort6Sigma1 = sort6Sigma1;
    }

    public String getSort7Sigma1() {
        return sort7Sigma1;
    }

    public void setSort7Sigma1(String sort7Sigma1) {
        this.sort7Sigma1 = sort7Sigma1;
    }

    public String getSort8Sigma1() {
        return sort8Sigma1;
    }

    public void setSort8Sigma1(String sort8Sigma1) {
        this.sort8Sigma1 = sort8Sigma1;
    }

    public int getMaskLimit() {
        return maskLimit;
    }

    public void setMaskLimit(int maskLimit) {
        this.maskLimit = maskLimit;
    }

    public int getMaskRange() {
        return maskRange;
    }

    public void setMaskRange(int maskRange) {
        this.maskRange = maskRange;
    }

    public String getAbnormalFlag() {
        return abnormalFlag;
    }

    public void setAbnormalFlag(String abnormalFlag) {
        this.abnormalFlag = abnormalFlag;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSysDate() {
        return sysDate;
    }

    public void setSysDate(String sysDate) {
        this.sysDate = sysDate;
    }

    public String getPat15() {
        return pat15;
    }

    public void setPat15(String pat15) {
        this.pat15 = pat15;
    }

    public String getPat16() {
        return pat16;
    }

    public void setPat16(String pat16) {
        this.pat16 = pat16;
    }

    public String getPat17() {
        return pat17;
    }

    public void setPat17(String pat17) {
        this.pat17 = pat17;
    }

    public String getPat18() {
        return pat18;
    }

    public void setPat18(String pat18) {
        this.pat18 = pat18;
    }

    public String getPat19() {
        return pat19;
    }

    public void setPat19(String pat19) {
        this.pat19 = pat19;
    }

    public String getPat20() {
        return pat20;
    }

    public void setPat20(String pat20) {
        this.pat20 = pat20;
    }

    public String getPat21() {
        return pat21;
    }

    public void setPat21(String pat21) {
        this.pat21 = pat21;
    }

    public String getPat22() {
        return pat22;
    }

    public void setPat22(String pat22) {
        this.pat22 = pat22;
    }

    public String getPat23() {
        return pat23;
    }

    public void setPat23(String pat23) {
        this.pat23 = pat23;
    }

    public String getPat24() {
        return pat24;
    }

    public void setPat24(String pat24) {
        this.pat24 = pat24;
    }

    public String getPat25() {
        return pat25;
    }

    public void setPat25(String pat25) {
        this.pat25 = pat25;
    }

    public String getPat26() {
        return pat26;
    }

    public void setPat26(String pat26) {
        this.pat26 = pat26;
    }

    public String getPat27() {
        return pat27;
    }

    public void setPat27(String pat27) {
        this.pat27 = pat27;
    }

    public String getPat28() {
        return pat28;
    }

    public void setPat28(String pat28) {
        this.pat28 = pat28;
    }

    public String getPat29() {
        return pat29;
    }

    public void setPat29(String pat29) {
        this.pat29 = pat29;
    }

    public String getPat30() {
        return pat30;
    }

    public void setPat30(String pat30) {
        this.pat30 = pat30;
    }

    public String getPat31() {
        return pat31;
    }

    public void setPat31(String pat31) {
        this.pat31 = pat31;
    }

    public String getPat32() {
        return pat32;
    }

    public void setPat32(String pat32) {
        this.pat32 = pat32;
    }

    public String getPat33() {
        return pat33;
    }

    public void setPat33(String pat33) {
        this.pat33 = pat33;
    }

    public String getPat34() {
        return pat34;
    }

    public void setPat34(String pat34) {
        this.pat34 = pat34;
    }

    public String getPat35() {
        return pat35;
    }

    public void setPat35(String pat35) {
        this.pat35 = pat35;
    }

    public String getPat36() {
        return pat36;
    }

    public void setPat36(String pat36) {
        this.pat36 = pat36;
    }

    public String getPat37() {
        return pat37;
    }

    public void setPat37(String pat37) {
        this.pat37 = pat37;
    }

    public String getPat38() {
        return pat38;
    }

    public void setPat38(String pat38) {
        this.pat38 = pat38;
    }

    public String getPat39() {
        return pat39;
    }

    public void setPat39(String pat39) {
        this.pat39 = pat39;
    }

    public String getPat40() {
        return pat40;
    }

    public void setPat40(String pat40) {
        this.pat40 = pat40;
    }

    public String getPat41() {
        return pat41;
    }

    public void setPat41(String pat41) {
        this.pat41 = pat41;
    }

    public String getPat42() {
        return pat42;
    }

    public void setPat42(String pat42) {
        this.pat42 = pat42;
    }

    public String getPat43() {
        return pat43;
    }

    public void setPat43(String pat43) {
        this.pat43 = pat43;
    }

    public String getPat44() {
        return pat44;
    }

    public void setPat44(String pat44) {
        this.pat44 = pat44;
    }

    public String getPat45() {
        return pat45;
    }

    public void setPat45(String pat45) {
        this.pat45 = pat45;
    }

    public String getPat46() {
        return pat46;
    }

    public void setPat46(String pat46) {
        this.pat46 = pat46;
    }

    public String getPat47() {
        return pat47;
    }

    public void setPat47(String pat47) {
        this.pat47 = pat47;
    }

    public String getPat48() {
        return pat48;
    }

    public void setPat48(String pat48) {
        this.pat48 = pat48;
    }

    public String getPat49() {
        return pat49;
    }

    public void setPat49(String pat49) {
        this.pat49 = pat49;
    }

    public String getPat50() {
        return pat50;
    }

    public void setPat50(String pat50) {
        this.pat50 = pat50;
    }

    public String getPat51() {
        return pat51;
    }

    public void setPat51(String pat51) {
        this.pat51 = pat51;
    }

    public String getPat52() {
        return pat52;
    }

    public void setPat52(String pat52) {
        this.pat52 = pat52;
    }

    public String getPat53() {
        return pat53;
    }

    public void setPat53(String pat53) {
        this.pat53 = pat53;
    }

    public String getPat54() {
        return pat54;
    }

    public void setPat54(String pat54) {
        this.pat54 = pat54;
    }

    public String getBipNo() {
        return bipNo;
    }

    public void setBipNo(String bipNo) {
        this.bipNo = bipNo;
    }

    public String getNewProduct() {
        return newProduct;
    }

    public void setNewProduct(String newProduct) {
        this.newProduct = newProduct;
    }

    public String getEngBin() {
        return engBin;
    }

    public void setEngBin(String engBin) {
        this.engBin = engBin;
    }

    public String getSh1PortionUp() {
        return sh1PortionUp;
    }

    public void setSh1PortionUp(String sh1PortionUp) {
        this.sh1PortionUp = sh1PortionUp;
    }

    public String getSh1PortionDown() {
        return sh1PortionDown;
    }

    public void setSh1PortionDown(String sh1PortionDown) {
        this.sh1PortionDown = sh1PortionDown;
    }

    public String getSh1NctCode() {
        return sh1NctCode;
    }

    public void setSh1NctCode(String sh1NctCode) {
        this.sh1NctCode = sh1NctCode;
    }

    public String getSh2PortionUp() {
        return sh2PortionUp;
    }

    public void setSh2PortionUp(String sh2PortionUp) {
        this.sh2PortionUp = sh2PortionUp;
    }

    public String getSh2PortionDown() {
        return sh2PortionDown;
    }

    public void setSh2PortionDown(String sh2PortionDown) {
        this.sh2PortionDown = sh2PortionDown;
    }

    public String getSh2NctCode() {
        return sh2NctCode;
    }

    public void setSh2NctCode(String sh2NctCode) {
        this.sh2NctCode = sh2NctCode;
    }

    public String getSort0Sigma2() {
        return sort0Sigma2;
    }

    public void setSort0Sigma2(String sort0Sigma2) {
        this.sort0Sigma2 = sort0Sigma2;
    }

    public String getSort2Sigma2() {
        return sort2Sigma2;
    }

    public void setSort2Sigma2(String sort2Sigma2) {
        this.sort2Sigma2 = sort2Sigma2;
    }

    public String getSort4Sigma2() {
        return sort4Sigma2;
    }

    public void setSort4Sigma2(String sort4Sigma2) {
        this.sort4Sigma2 = sort4Sigma2;
    }

    public String getSort5Sigma2() {
        return sort5Sigma2;
    }

    public void setSort5Sigma2(String sort5Sigma2) {
        this.sort5Sigma2 = sort5Sigma2;
    }

    public String getSort6Sigma2() {
        return sort6Sigma2;
    }

    public void setSort6Sigma2(String sort6Sigma2) {
        this.sort6Sigma2 = sort6Sigma2;
    }

    public String getSort7Sigma2() {
        return sort7Sigma2;
    }

    public void setSort7Sigma2(String sort7Sigma2) {
        this.sort7Sigma2 = sort7Sigma2;
    }

    public String getSort8Sigma2() {
        return sort8Sigma2;
    }

    public void setSort8Sigma2(String sort8Sigma2) {
        this.sort8Sigma2 = sort8Sigma2;
    }

    public String getEng2Bin() {
        return eng2Bin;
    }

    public void setEng2Bin(String eng2Bin) {
        this.eng2Bin = eng2Bin;
    }

    public String getSh3PortionUp() {
        return sh3PortionUp;
    }

    public void setSh3PortionUp(String sh3PortionUp) {
        this.sh3PortionUp = sh3PortionUp;
    }

    public String getSh3PortionDown() {
        return sh3PortionDown;
    }

    public void setSh3PortionDown(String sh3PortionDown) {
        this.sh3PortionDown = sh3PortionDown;
    }

    public String getSh3NctCode() {
        return sh3NctCode;
    }

    public void setSh3NctCode(String sh3NctCode) {
        this.sh3NctCode = sh3NctCode;
    }

    public String getSh4PortionUp() {
        return sh4PortionUp;
    }

    public void setSh4PortionUp(String sh4PortionUp) {
        this.sh4PortionUp = sh4PortionUp;
    }

    public String getSh4PortionDown() {
        return sh4PortionDown;
    }

    public void setSh4PortionDown(String sh4PortionDown) {
        this.sh4PortionDown = sh4PortionDown;
    }

    public String getSh4NctCode() {
        return sh4NctCode;
    }

    public void setSh4NctCode(String sh4NctCode) {
        this.sh4NctCode = sh4NctCode;
    }

    public String getSubbinSigma1() {
        return subbinSigma1;
    }

    public void setSubbinSigma1(String subbinSigma1) {
        this.subbinSigma1 = subbinSigma1;
    }

    public String getSubbinSigma2() {
        return subbinSigma2;
    }

    public void setSubbinSigma2(String subbinSigma2) {
        this.subbinSigma2 = subbinSigma2;
    }

    public String getSubbinSigma3() {
        return subbinSigma3;
    }

    public void setSubbinSigma3(String subbinSigma3) {
        this.subbinSigma3 = subbinSigma3;
    }

    public String getNcfCode() {
        return ncfCode;
    }

    public void setNcfCode(String ncfCode) {
        this.ncfCode = ncfCode;
    }

    public String getSort3Sigma1() {
        return sort3Sigma1;
    }

    public void setSort3Sigma1(String sort3Sigma1) {
        this.sort3Sigma1 = sort3Sigma1;
    }

    public String getSort3Sigma2() {
        return sort3Sigma2;
    }

    public void setSort3Sigma2(String sort3Sigma2) {
        this.sort3Sigma2 = sort3Sigma2;
    }

    public String getYieldNctCode1() {
        return yieldNctCode1;
    }

    public void setYieldNctCode1(String yieldNctCode1) {
        this.yieldNctCode1 = yieldNctCode1;
    }

    public String getYieldNctCode2() {
        return yieldNctCode2;
    }

    public void setYieldNctCode2(String yieldNctCode2) {
        this.yieldNctCode2 = yieldNctCode2;
    }

    public String getYieldSigma3() {
        return yieldSigma3;
    }

    public void setYieldSigma3(String yieldSigma3) {
        this.yieldSigma3 = yieldSigma3;
    }

    public String getYieldSigma4() {
        return yieldSigma4;
    }

    public void setYieldSigma4(String yieldSigma4) {
        this.yieldSigma4 = yieldSigma4;
    }

    public String getYieldNctCode3() {
        return yieldNctCode3;
    }

    public void setYieldNctCode3(String yieldNctCode3) {
        this.yieldNctCode3 = yieldNctCode3;
    }

    public String getYieldNctCode4() {
        return yieldNctCode4;
    }

    public void setYieldNctCode4(String yieldNctCode4) {
        this.yieldNctCode4 = yieldNctCode4;
    }

    public String getHardbinSbl0() {
        return hardbinSbl0;
    }

    public void setHardbinSbl0(String hardbinSbl0) {
        this.hardbinSbl0 = hardbinSbl0;
    }

    public String getHardbinSbl2() {
        return hardbinSbl2;
    }

    public void setHardbinSbl2(String hardbinSbl2) {
        this.hardbinSbl2 = hardbinSbl2;
    }

    public String getHardbinSbl3() {
        return hardbinSbl3;
    }

    public void setHardbinSbl3(String hardbinSbl3) {
        this.hardbinSbl3 = hardbinSbl3;
    }

    public String getHardbinSbl4() {
        return hardbinSbl4;
    }

    public void setHardbinSbl4(String hardbinSbl4) {
        this.hardbinSbl4 = hardbinSbl4;
    }

    public String getHardbinSbl5() {
        return hardbinSbl5;
    }

    public void setHardbinSbl5(String hardbinSbl5) {
        this.hardbinSbl5 = hardbinSbl5;
    }

    public String getHardbinSbl6() {
        return hardbinSbl6;
    }

    public void setHardbinSbl6(String hardbinSbl6) {
        this.hardbinSbl6 = hardbinSbl6;
    }

    public String getHardbinSbl7() {
        return hardbinSbl7;
    }

    public void setHardbinSbl7(String hardbinSbl7) {
        this.hardbinSbl7 = hardbinSbl7;
    }

    public String getHardbinSbl8() {
        return hardbinSbl8;
    }

    public void setHardbinSbl8(String hardbinSbl8) {
        this.hardbinSbl8 = hardbinSbl8;
    }

    public String getSubbinSbl1() {
        return subbinSbl1;
    }

    public void setSubbinSbl1(String subbinSbl1) {
        this.subbinSbl1 = subbinSbl1;
    }

    public String getSubbinSbl2() {
        return subbinSbl2;
    }

    public void setSubbinSbl2(String subbinSbl2) {
        this.subbinSbl2 = subbinSbl2;
    }

    public String getSubbinSbl3() {
        return subbinSbl3;
    }

    public void setSubbinSbl3(String subbinSbl3) {
        this.subbinSbl3 = subbinSbl3;
    }

    public String getSubbinSbl4() {
        return subbinSbl4;
    }

    public void setSubbinSbl4(String subbinSbl4) {
        this.subbinSbl4 = subbinSbl4;
    }

    public String getSubbinSbl5() {
        return subbinSbl5;
    }

    public void setSubbinSbl5(String subbinSbl5) {
        this.subbinSbl5 = subbinSbl5;
    }

    public String getSubbinSbl6() {
        return subbinSbl6;
    }

    public void setSubbinSbl6(String subbinSbl6) {
        this.subbinSbl6 = subbinSbl6;
    }

    public String getSubbinSbl7() {
        return subbinSbl7;
    }

    public void setSubbinSbl7(String subbinSbl7) {
        this.subbinSbl7 = subbinSbl7;
    }

    public String getSubbinSbl8() {
        return subbinSbl8;
    }

    public void setSubbinSbl8(String subbinSbl8) {
        this.subbinSbl8 = subbinSbl8;
    }

    public String getSubbinSbl9() {
        return subbinSbl9;
    }

    public void setSubbinSbl9(String subbinSbl9) {
        this.subbinSbl9 = subbinSbl9;
    }

    public String getSubbinSbl10() {
        return subbinSbl10;
    }

    public void setSubbinSbl10(String subbinSbl10) {
        this.subbinSbl10 = subbinSbl10;
    }

    public String getSubbinSbl11() {
        return subbinSbl11;
    }

    public void setSubbinSbl11(String subbinSbl11) {
        this.subbinSbl11 = subbinSbl11;
    }

    public String getSubbinSbl12() {
        return subbinSbl12;
    }

    public void setSubbinSbl12(String subbinSbl12) {
        this.subbinSbl12 = subbinSbl12;
    }

    public String getSubbinSbl13() {
        return subbinSbl13;
    }

    public void setSubbinSbl13(String subbinSbl13) {
        this.subbinSbl13 = subbinSbl13;
    }

    public String getSubbinSbl14() {
        return subbinSbl14;
    }

    public void setSubbinSbl14(String subbinSbl14) {
        this.subbinSbl14 = subbinSbl14;
    }

    public String getSubbinSbl15() {
        return subbinSbl15;
    }

    public void setSubbinSbl15(String subbinSbl15) {
        this.subbinSbl15 = subbinSbl15;
    }

    public String getSubbinSbl16() {
        return subbinSbl16;
    }

    public void setSubbinSbl16(String subbinSbl16) {
        this.subbinSbl16 = subbinSbl16;
    }

    public String getHoldFlag() {
        return holdFlag;
    }

    public void setHoldFlag(String holdFlag) {
        this.holdFlag = holdFlag;
    }

    public String getRunsblFlag() {
        return runsblFlag;
    }

    public void setRunsblFlag(String runsblFlag) {
        this.runsblFlag = runsblFlag;
    }

    public int getRunsblMinCnt() {
        return runsblMinCnt;
    }

    public void setRunsblMinCnt(int runsblMinCnt) {
        this.runsblMinCnt = runsblMinCnt;
    }

    public String getShPgm() {
        return shPgm;
    }

    public void setShPgm(String shPgm) {
        this.shPgm = shPgm;
    }

    public String getMultichipFlag() {
        return multichipFlag;
    }

    public void setMultichipFlag(String multichipFlag) {
        this.multichipFlag = multichipFlag;
    }

    public String getRebiSblSpec1() {
        return rebiSblSpec1;
    }

    public void setRebiSblSpec1(String rebiSblSpec1) {
        this.rebiSblSpec1 = rebiSblSpec1;
    }

    public String getRebiSblSpec2() {
        return rebiSblSpec2;
    }

    public void setRebiSblSpec2(String rebiSblSpec2) {
        this.rebiSblSpec2 = rebiSblSpec2;
    }

    public String getStep() {
        return step;
    }

    public void setStep(String step) {
        this.step = step;
    }

    public String getWaferSbl() {
        return waferSbl;
    }

    public void setWaferSbl(String waferSbl) {
        this.waferSbl = waferSbl;
    }

    public String getWaferLimitCnt() {
        return waferLimitCnt;
    }

    public void setWaferLimitCnt(String waferLimitCnt) {
        this.waferLimitCnt = waferLimitCnt;
    }

    public String getWaferLotFilter() {
        return waferLotFilter;
    }

    public void setWaferLotFilter(String waferLotFilter) {
        this.waferLotFilter = waferLotFilter;
    }

    public String getWaferSblBin() {
        return waferSblBin;
    }

    public void setWaferSblBin(String waferSblBin) {
        this.waferSblBin = waferSblBin;
    }

    public String getSubNo() {
        return subNo;
    }

    public void setSubNo(String subNo) {
        this.subNo = subNo;
    }

    public String getScsSblSpec() {
        return scsSblSpec;
    }

    public void setScsSblSpec(String scsSblSpec) {
        this.scsSblSpec = scsSblSpec;
    }

    public String getWaferCi() {
        return waferCi;
    }

    public void setWaferCi(String waferCi) {
        this.waferCi = waferCi;
    }

    public String getWaferCiBin() {
        return waferCiBin;
    }

    public void setWaferCiBin(String waferCiBin) {
        this.waferCiBin = waferCiBin;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

}