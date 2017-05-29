package kr.famos.bets.tdbiAnalysis.dataSummary.dto;

/**
 * Created by yhkim on 2017-03-13.
 */
public class DataSummaryDto {
    private String endTimeStart = ""; // 검색조건 From
    private String endTimeEnd = ""; // 검색조건 to
    private String testerModel = ""; //
    private String partNumber = ""; //
    private String processCode = "";  // TDBI는 RAW파일에 ProcessCode가 기록되어 있지 않아 보드의 앞 4자리를 사용했으나, 혼란스러워서 사용하지 않기로 함
    private String testNumber = "";  //
    private String lotId = ""; //
    private String mainProgramName = ""; //
    private String boardId = "";  //

//    private String operatorId = ""; //
//    private String startTime = ""; //
//    private String endTime = ""; //
//    private String zoneNumber = "";  //
//    private String slotNumber = "";  //

    public String getEndTimeStart() {
        return endTimeStart;
    }

    public void setEndTimeStart(String endTimeStart) {
        this.endTimeStart = endTimeStart;
    }

    public String getEndTimeEnd() {
        return endTimeEnd;
    }

    public void setEndTimeEnd(String endTimeEnd) {
        this.endTimeEnd = endTimeEnd;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
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

    public String getTestNumber() {
        return testNumber;
    }

    public void setTestNumber(String testNumber) {
        this.testNumber = testNumber;
    }

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }
}