package kr.famos.bets.basisInformation.programRegister.dto;

/**
 * Created by yhkim on 2017-02-21.
 *
 * 반도체 테스트 기준정보 테이블 PROGRAM_REGISTER
 * 테스트 장비와 테스트 프로그램에 대한 정보
 */
public class ProgramRegisterDto {
    private String productName            = ""; // eMCP 16G16G
    private String partNumber             = ""; // H9TQ17ABJTA-CUR
    private String customer               = ""; // 판매처
    private String packageType            = ""; // 221FBGA
    private String processCode            = ""; // T0350
    private String testerModel            = ""; // T5503
    private String mainProgramName        = ""; // ABCD1234
    private int temperature            = 0; // 85/-30
    private int temperatureGuard          = 0;  // TEMPERATURE GUARDBAND
    private String sblYieldLimit          = ""; // 95
    private String sblSubbinANumber       = ""; // 110
    private String sblSubbinALimitPercent = ""; // 3
    private String sblSubbinALimitCount   = ""; // 1
    private String sblSubbinBNumber       = ""; // 128
    private String sblSubbinBLimitPercent = ""; // 5
    private String sblSubbinBLimitCount   = ""; // 3
    private String functionKey            = ""; // 스위치 16개의 값 Y/N
    private String fab                    = ""; // M1
    private String grade                  = ""; // HQ
    private String programVersion         = ""; // 1
    private String firmwareVersion        = ""; // 1.01
    private String testerOsVersion        = ""; // A.10D
    private String para                   = ""; // 256개, 소켓개수
    private String firmwareName           = ""; // 펌웨어 이름
    private String operatorId             = ""; //
    private String sysDate                = ""; //
    private String sysDateStart           = ""; //
    private String sysDateEnd             = ""; //
    private String dutMap                 = ""; // DDR_256, NAND_512
    private String sysUser                = ""; //
    private String modifyUser             = ""; //
    private String binDescription         = ""; //
    private String modifyDate             = ""; //

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public int getTemperatureGuard() {
        return temperatureGuard;
    }

    public void setTemperatureGuard(int temperatureGuard) {
        this.temperatureGuard = temperatureGuard;
    }

    public String getSblYieldLimit() {
        return sblYieldLimit;
    }

    public void setSblYieldLimit(String sblYieldLimit) {
        this.sblYieldLimit = sblYieldLimit;
    }

    public String getSblSubbinANumber() {
        return sblSubbinANumber;
    }

    public void setSblSubbinANumber(String sblSubbinANumber) {
        this.sblSubbinANumber = sblSubbinANumber;
    }

    public String getSblSubbinALimitPercent() {
        return sblSubbinALimitPercent;
    }

    public void setSblSubbinALimitPercent(String sblSubbinALimitPercent) {
        this.sblSubbinALimitPercent = sblSubbinALimitPercent;
    }

    public String getSblSubbinALimitCount() {
        return sblSubbinALimitCount;
    }

    public void setSblSubbinALimitCount(String sblSubbinALimitCount) {
        this.sblSubbinALimitCount = sblSubbinALimitCount;
    }

    public String getSblSubbinBNumber() {
        return sblSubbinBNumber;
    }

    public void setSblSubbinBNumber(String sblSubbinBNumber) {
        this.sblSubbinBNumber = sblSubbinBNumber;
    }

    public String getSblSubbinBLimitPercent() {
        return sblSubbinBLimitPercent;
    }

    public void setSblSubbinBLimitPercent(String sblSubbinBLimitPercent) {
        this.sblSubbinBLimitPercent = sblSubbinBLimitPercent;
    }

    public String getSblSubbinBLimitCount() {
        return sblSubbinBLimitCount;
    }

    public void setSblSubbinBLimitCount(String sblSubbinBLimitCount) {
        this.sblSubbinBLimitCount = sblSubbinBLimitCount;
    }

    public String getFunctionKey() {
        return functionKey;
    }

    public void setFunctionKey(String functionKey) {
        this.functionKey = functionKey;
    }

    public String getFab() {
        return fab;
    }

    public void setFab(String fab) {
        this.fab = fab;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getProgramVersion() {
        return programVersion;
    }

    public void setProgramVersion(String programVersion) {
        this.programVersion = programVersion;
    }

    public String getFirmwareVersion() {
        return firmwareVersion;
    }

    public void setFirmwareVersion(String firmwareVersion) {
        this.firmwareVersion = firmwareVersion;
    }

    public String getTesterOsVersion() {
        return testerOsVersion;
    }

    public void setTesterOsVersion(String testerOsVersion) {
        this.testerOsVersion = testerOsVersion;
    }

    public String getPara() {
        return para;
    }

    public void setPara(String para) {
        this.para = para;
    }

    public String getFirmwareName() {
        return firmwareName;
    }

    public void setFirmwareName(String firmwareName) {
        this.firmwareName = firmwareName;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public String getSysDate() {
        return sysDate;
    }

    public void setSysDate(String sysDate) {
        this.sysDate = sysDate;
    }

    public String getDutMap() {
        return dutMap;
    }

    public void setDutMap(String dutMap) {
        this.dutMap = dutMap;
    }

    public String getSysUser() {
        return sysUser;
    }

    public void setSysUser(String sysUser) {
        this.sysUser = sysUser;
    }

    public String getModifyUser() {
        return modifyUser;
    }

    public void setModifyUser(String modifyUser) {
        this.modifyUser = modifyUser;
    }

    public String getBinDescription() {
        return binDescription;
    }

    public void setBinDescription(String binDescription) {
        this.binDescription = binDescription;
    }

    public String getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(String modifyDate) {
        this.modifyDate = modifyDate;
    }
}
