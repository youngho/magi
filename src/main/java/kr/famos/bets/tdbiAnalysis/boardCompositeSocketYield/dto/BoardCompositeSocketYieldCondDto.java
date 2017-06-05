package kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.dto;
/**
 * BETS-UI-0507 : BoardCompositeSocketYield
 * 보드의 소켓별 수율을 볼 수 있는 화면
 */
public class BoardCompositeSocketYieldCondDto {
    private String biEndTimeStart    = ""; // 검색조건 From
    private String biEndTimeEnd      = ""; // 검색조건 to
    private String biBoardId         = "";
    private String biPartNumber      = "";
    private String biMainProgramName = "";
    private String biTestNumber      = "";

//    private int biSeq                = 0;  //
//    private String biLotId           = ""; //
//    private int biProcessCode        = 0;  //
//    private String biOperatorId      = ""; //
//    private String biStartTime       = ""; //
//    private String biEndTime         = ""; //
//    private String biTesterModel     = ""; //
//    private int biZoneNumber         = 0;  //
//    private int biSlotNumber         = 0;  //
//    private String biBoardRow        = ""; // x 축 시작,끝값
//    private String biBoardColumn     = ""; // y축 시작,끝값
//    private String biSocketNumber    = ""; //


    public String getBiEndTimeStart() {
        return biEndTimeStart;
    }

    public void setBiEndTimeStart(String biEndTimeStart) {
        this.biEndTimeStart = biEndTimeStart;
    }

    public String getBiEndTimeEnd() {
        return biEndTimeEnd;
    }

    public void setBiEndTimeEnd(String biEndTimeEnd) {
        this.biEndTimeEnd = biEndTimeEnd;
    }

    public String getBiBoardId() {
        return biBoardId;
    }

    public void setBiBoardId(String biBoardId) {
        this.biBoardId = biBoardId;
    }

    public String getBiPartNumber() {
        return biPartNumber;
    }

    public void setBiPartNumber(String biPartNumber) {
        this.biPartNumber = biPartNumber;
    }

    public String getBiMainProgramName() {
        return biMainProgramName;
    }

    public void setBiMainProgramName(String biMainProgramName) {
        this.biMainProgramName = biMainProgramName;
    }

    public String getBiTestNumber() {
        return biTestNumber;
    }

    public void setBiTestNumber(String biTestNumber) {
        this.biTestNumber = biTestNumber;
    }
}