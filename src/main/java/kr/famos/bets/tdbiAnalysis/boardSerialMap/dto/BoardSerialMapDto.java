package kr.famos.bets.tdbiAnalysis.boardSerialMap.dto;

/**
 * Created by yhkim on 2017-03-13.
 */
public class BoardSerialMapDto {
    private int seq                = 0;  //
    private String lotId           = ""; //
    private String mainProgramName = ""; //
    private String processCode     = ""; // TDBI는 RAW파일에 ProcessCode가 기록되어 있지 않아 보드의 앞 4자리를 사용했으나, 혼란스러워서 사용하지 않기로 함
    private String operatorId      = ""; //
    private String startTime       = ""; //
    private String endTime         = ""; //
    private String testerModel     = ""; //
    private String testNumber      = ""; //
    private String boardId         = "";  //
    private String zoneNumber      = ""; //
    private String slotNumber      = ""; //
    private String boardRow        = ""; // x 축 시작,끝값
    private String boardColumn     = ""; // y축 시작,끝값
    private String socketNumber    = ""; //
    private String partNumber      = ""; //

    private String endTimeStart    = ""; // 검색조건 From
    private String endTimeEnd      = ""; // 검색조건 to

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
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

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getTestNumber() {
        return testNumber;
    }

    public void setTestNumber(String testNumber) {
        this.testNumber = testNumber;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getZoneNumber() {
        return zoneNumber;
    }

    public void setZoneNumber(String zoneNumber) {
        this.zoneNumber = zoneNumber;
    }

    public String getSlotNumber() {
        return slotNumber;
    }

    public void setSlotNumber(String slotNumber) {
        this.slotNumber = slotNumber;
    }

    public String getBoardRow() {
        return boardRow;
    }

    public void setBoardRow(String boardRow) {
        this.boardRow = boardRow;
    }

    public String getBoardColumn() {
        return boardColumn;
    }

    public void setBoardColumn(String boardColumn) {
        this.boardColumn = boardColumn;
    }

    public String getSocketNumber() {
        return socketNumber;
    }

    public void setSocketNumber(String socketNumber) {
        this.socketNumber = socketNumber;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

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
}
