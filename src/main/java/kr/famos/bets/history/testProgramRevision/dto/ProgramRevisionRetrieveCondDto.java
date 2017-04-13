package kr.famos.bets.history.testProgramRevision.dto;

/**
 * Created by yhkim on 2017-03-11.
 */
public class ProgramRevisionRetrieveCondDto {
    private String createDateStart  = ""; // 생성일시시작
    private String createDateEnd    = ""; // 생성일시끝
    private String firmwareName     = ""; // 펌웨어 이름(MAGNUM5만 적용)
    private String partNumber       = ""; // H9TQ17ABJTA-CUR
    private String processCode      = ""; // T0350
    private String testerOsVersion  = ""; // TESTER_MODEL OS VERSION
    private String testerModel      = ""; // TESTER 번호
    private String mainProgramName  = ""; // TEST PROGRAM NAME

//    private String grade            = ""; // 제품 품질 설정
//    private String fab              = ""; // WAFER 제조 공장 번호
//    private String firmwareVersion  = ""; // 펌웨어 버전(MAGNUM5만 적용)
//    private String functionKey      = ""; // 스위치 16개의 값 Y/N
//    private int temperature         = 0;  // TEST 온도
//    private int temperatureGuard    = 0;  // TEMPERATURE GUARDBAND
//    private String sblYieldLimit    = ""; // 95
//    private String sblSubBinaNumber = ""; // 110
//    private String sblSubBinaLimit  = ""; // 3
//    private String sblSubBinaCount  = ""; // 1
//    private String sblSubBinbNumber = ""; // 128
//    private String sblSubBinbLimit  = ""; // 5
//    private String sblSubBinbCount  = ""; // 3
//    private String sblBin9Counter   = ""; // OPBIN BIN9 개수
//    private String productName      = ""; // eMCP 16G16G
//    private String customer         = ""; // 판매처
//    private String packageType      = ""; // 221FBGA
//    private String programVersion   = ""; // TEST PROGRAM VERSION
//    private String para             = ""; // T5503/T5588/MAGNUM5의 동시 TEST가능수량
//    private String dutMap           = ""; // HANDLER의 DUT 배열에 FILE NAME
//    private String passBinSelection = ""; // PASS/FAIL BIN 선택 (YYYYNNNN) Y=PASS,N=FAIL
//    private String firmwareDirectory = ""; // Test Program 저장 경로
//    private String createUser       = ""; // 최초생성 ID
//    private String createDate       = ""; // 생성일시
//    private String modifyUser       = ""; // 수정 ID
//    private String modifyDate       = ""; // 수정일시
//    private String sblBin9Limit     = ""; //
//    private String sblBin8Limit     = ""; //


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

    public String getFirmwareName() {
        return firmwareName;
    }

    public void setFirmwareName(String firmwareName) {
        this.firmwareName = firmwareName;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getTesterOsVersion() {
        return testerOsVersion;
    }

    public void setTesterOsVersion(String testerOsVersion) {
        this.testerOsVersion = testerOsVersion;
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
}
