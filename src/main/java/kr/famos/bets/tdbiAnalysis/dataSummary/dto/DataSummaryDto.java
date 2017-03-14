package kr.famos.bets.tdbiAnalysis.dataSummary.dto;

/**
 * Created by yhkim on 2017-03-13.
 */
public class DataSummaryDto {
    private int biSeq                = 0;  //
    private String biLotId           = ""; //
    private String biMainProgramName = ""; //
    private int biProcessCode        = 0;  //
    private String biOperatorId      = ""; //
    private String biStartTime       = ""; //
    private String biEndTime         = ""; //
    private String biTesterModel     = ""; //
    private int biTestNumber         = 0;  //
    private int biBoardId            = 0;  //
    private int biZoneNumber         = 0;  //
    private int biSlotNumber         = 0;  //
    private String biBoardRow        = ""; // x 축 시작,끝값
    private String biBoardColumn     = ""; // y축 시작,끝값
    private String biSocketNumber    = ""; //
    private String biPartNumber      = ""; //

    private String biEndTimeStart    = ""; // 검색조건 From
    private String biEndTimeEnd      = ""; // 검색조건 to

    public int getBiSeq() {
        return biSeq;
    }

    public void setBiSeq(int biSeq) {
        this.biSeq = biSeq;
    }

    public String getBiLotId() {
        return biLotId;
    }

    public void setBiLotId(String biLotId) {
        this.biLotId = biLotId;
    }

    public String getBiMainProgramName() {
        return biMainProgramName;
    }

    public void setBiMainProgramName(String biMainProgramName) {
        this.biMainProgramName = biMainProgramName;
    }

    public int getBiProcessCode() {
        return biProcessCode;
    }

    public void setBiProcessCode(int biProcessCode) {
        this.biProcessCode = biProcessCode;
    }

    public String getBiOperatorId() {
        return biOperatorId;
    }

    public void setBiOperatorId(String biOperatorId) {
        this.biOperatorId = biOperatorId;
    }

    public String getBiStartTime() {
        return biStartTime;
    }

    public void setBiStartTime(String biStartTime) {
        this.biStartTime = biStartTime;
    }

    public String getBiEndTime() {
        return biEndTime;
    }

    public void setBiEndTime(String biEndTime) {
        this.biEndTime = biEndTime;
    }

    public String getBiTesterModel() {
        return biTesterModel;
    }

    public void setBiTesterModel(String biTesterModel) {
        this.biTesterModel = biTesterModel;
    }

    public int getBiTestNumber() {
        return biTestNumber;
    }

    public void setBiTestNumber(int biTestNumber) {
        this.biTestNumber = biTestNumber;
    }

    public int getBiBoardId() {
        return biBoardId;
    }

    public void setBiBoardId(int biBoardId) {
        this.biBoardId = biBoardId;
    }

    public int getBiZoneNumber() {
        return biZoneNumber;
    }

    public void setBiZoneNumber(int biZoneNumber) {
        this.biZoneNumber = biZoneNumber;
    }

    public int getBiSlotNumber() {
        return biSlotNumber;
    }

    public void setBiSlotNumber(int biSlotNumber) {
        this.biSlotNumber = biSlotNumber;
    }

    public String getBiBoardRow() {
        return biBoardRow;
    }

    public void setBiBoardRow(String biBoardRow) {
        this.biBoardRow = biBoardRow;
    }

    public String getBiBoardColumn() {
        return biBoardColumn;
    }

    public void setBiBoardColumn(String biBoardColumn) {
        this.biBoardColumn = biBoardColumn;
    }

    public String getBiSocketNumber() {
        return biSocketNumber;
    }

    public void setBiSocketNumber(String biSocketNumber) {
        this.biSocketNumber = biSocketNumber;
    }

    public String getBiPartNumber() {
        return biPartNumber;
    }

    public void setBiPartNumber(String biPartNumber) {
        this.biPartNumber = biPartNumber;
    }

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
}