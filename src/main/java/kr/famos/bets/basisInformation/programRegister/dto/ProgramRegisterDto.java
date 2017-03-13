package kr.famos.bets.basisInformation.programRegister.dto;

/**
 * Created by yhkim on 2017-02-21.
 *
 * 반도체 테스트 기준정보 테이블 PROGRAM_REGISTER
 * 테스트 장비와 테스트 프로그램에 대한 정보
 */
public class ProgramRegisterDto {

    private String testerModel      = ""; // TESTER 번호
    private String processCode      = ""; // T0350
    private String partNumber       = ""; // H9TQ17ABJTA-CUR
    private String mainProgramName  = ""; // TEST PROGRAM NAME
    private String grade            = ""; // 제품 품질 설정
    private String fab              = ""; // WAFER 제조 공장 번호
    private String firmwareName     = ""; // 펌웨어 이름(MAGNUM5만 적용)
    private String firmwareVersion  = ""; // 펌웨어 버전(MAGNUM5만 적용)
    private String functionKey      = ""; // 스위치 16개의 값 Y/N
    private int temperature         = 0;  // TEST 온도
    private int temperatureGuard    = 0;  // TEMPERATURE GUARDBAND
    private String sblYieldLimit    = ""; // 95
    private String sblSubBinaNumber = ""; // 110
    private String sblSubBinaLimit  = ""; // 3
    private String sblSubBinaCount  = ""; // 1
    private String sblSubBinbNumber = ""; // 128
    private String sblSubBinbLimit  = ""; // 5
    private String sblSubBinbCount  = ""; // 3
    private String sblBin9Counter   = ""; // OPBIN BIN9 개수
    private String productName      = ""; // eMCP 16G16G
    private String customer         = ""; // 판매처
    private String packageType      = ""; // 221FBGA
    private String programVersion   = ""; // TEST PROGRAM VERSION
    private String testerOsVersion  = ""; // TESTER_MODEL OS VERSION
    private String para             = ""; // T5503/T5588/MAGNUM5의 동시 TEST가능수량
    private String dutMap           = ""; // HANDLER의 DUT 배열에 FILE NAME
    private String binDescription   = ""; // PASS/FAIL BIN 선택 (YYYYNNNN) Y=PASS,N=FAIL
    private String programDirectory = ""; // Test Program 저장 경로
    private String createUser       = ""; // 최초생성 ID
    private String createDate       = ""; // 생성일시
    private String modifyUser       = ""; // 수정 ID
    private String modifyDate       = ""; // 수정일시
    private String sblBin9Limit     = ""; //
    private String sblBin8Limit     = ""; //

    private String createDateStart  = ""; // 생성일시시작
    private String createDateEnd    = ""; // 생성일시끝

    private String passBinSelection = ""; // PASS/FAIL BIN 선택 (YYYYNNNN) Y=PASS,N=FAIL

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getFab() {
        return fab;
    }

    public void setFab(String fab) {
        this.fab = fab;
    }

    public String getFirmwareName() {
        return firmwareName;
    }

    public void setFirmwareName(String firmwareName) {
        this.firmwareName = firmwareName;
    }

    public String getFirmwareVersion() {
        return firmwareVersion;
    }

    public void setFirmwareVersion(String firmwareVersion) {
        this.firmwareVersion = firmwareVersion;
    }

    public String getFunctionKey() {
        return functionKey;
    }

    public void setFunctionKey(String functionKey) {
        this.functionKey = functionKey;
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

    public String getSblSubBinaNumber() {
        return sblSubBinaNumber;
    }

    public void setSblSubBinaNumber(String sblSubBinaNumber) {
        this.sblSubBinaNumber = sblSubBinaNumber;
    }

    public String getSblSubBinaLimit() {
        return sblSubBinaLimit;
    }

    public void setSblSubBinaLimit(String sblSubBinaLimit) {
        this.sblSubBinaLimit = sblSubBinaLimit;
    }

    public String getSblSubBinaCount() {
        return sblSubBinaCount;
    }

    public void setSblSubBinaCount(String sblSubBinaCount) {
        this.sblSubBinaCount = sblSubBinaCount;
    }

    public String getSblSubBinbNumber() {
        return sblSubBinbNumber;
    }

    public void setSblSubBinbNumber(String sblSubBinbNumber) {
        this.sblSubBinbNumber = sblSubBinbNumber;
    }

    public String getSblSubBinbLimit() {
        return sblSubBinbLimit;
    }

    public void setSblSubBinbLimit(String sblSubBinbLimit) {
        this.sblSubBinbLimit = sblSubBinbLimit;
    }

    public String getSblSubBinbCount() {
        return sblSubBinbCount;
    }

    public void setSblSubBinbCount(String sblSubBinbCount) {
        this.sblSubBinbCount = sblSubBinbCount;
    }

    public String getSblBin9Counter() {
        return sblBin9Counter;
    }

    public void setSblBin9Counter(String sblBin9Counter) {
        this.sblBin9Counter = sblBin9Counter;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
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

    public String getProgramVersion() {
        return programVersion;
    }

    public void setProgramVersion(String programVersion) {
        this.programVersion = programVersion;
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

    public String getDutMap() {
        return dutMap;
    }

    public void setDutMap(String dutMap) {
        this.dutMap = dutMap;
    }

    public String getBinDescription() {
        return binDescription;
    }

    public void setBinDescription(String binDescription) {
        this.binDescription = binDescription;
    }

    public String getProgramDirectory() {
        return programDirectory;
    }

    public void setProgramDirectory(String programDirectory) {
        this.programDirectory = programDirectory;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getModifyUser() {
        return modifyUser;
    }

    public void setModifyUser(String modifyUser) {
        this.modifyUser = modifyUser;
    }

    public String getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(String modifyDate) {
        this.modifyDate = modifyDate;
    }

    public String getSblBin9Limit() {
        return sblBin9Limit;
    }

    public void setSblBin9Limit(String sblBin9Limit) {
        this.sblBin9Limit = sblBin9Limit;
    }

    public String getSblBin8Limit() {
        return sblBin8Limit;
    }

    public void setSblBin8Limit(String sblBin8Limit) {
        this.sblBin8Limit = sblBin8Limit;
    }

    public String getCreateDateStart() {
        return createDateStart;
    }

    public void setCreateDateStart(String createDateStart) {
        this.createDateStart = createDateStart;
    }

    public String getCreateDateEnd() {
        return createDateEnd;
    }

    public void setCreateDateEnd(String createDateEnd) {
        this.createDateEnd = createDateEnd;
    }

    public String getPassBinSelection() {
        return passBinSelection;
    }

    public void setPassBinSelection(String passBinSelection) {
        this.passBinSelection = passBinSelection;
    }
}
