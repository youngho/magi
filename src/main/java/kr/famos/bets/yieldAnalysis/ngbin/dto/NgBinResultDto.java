package kr.famos.bets.yieldAnalysis.ngbin.dto;

import org.springframework.stereotype.Service;

/**
 * Created by yhkim on 2017-03-08.
 *
 * 20170606 : 강래원 책임의 요구사함으로 컬럼 순서가 아래와 같이 바뀜
 */
public class NgBinResultDto {
    private String partNumber        = ""; // PART NUMBER
    private String lotId             = ""; // LOT ID
    private String processCode       = ""; // PROCESS CODE
    private String testerNumber      = ""; // TESTER 번호(Host id)
    private String lotInTime         = ""; // OPERATOR ID 입력 시점
    private String endTime           = ""; // SRQKIND#10 시점.
    private String testerModel       = ""; // TESTER MODEL NAME
    private String head              = ""; // HEAD NUMBER A or B
    private String operatorId        = ""; // OPERATOR ID
    private String handlerModel      = ""; // HANDLER MODEL NAME
    private String testCounter       = ""; // TEST 횟수 (0 or 1 or 2.....)
    private String boardId           = ""; // TEST BOARD ID (FIX)
    private int total                = 0;
    private String ngBin             = ""; //

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getHandlerModel() {
        return handlerModel;
    }

    public void setHandlerModel(String handlerModel) {
        this.handlerModel = handlerModel;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
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

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
    }

    public String getTestCounter() {
        return testCounter;
    }

    public void setTestCounter(String testCounter) {
        this.testCounter = testCounter;
    }

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getLotInTime() {
        return lotInTime;
    }

    public void setLotInTime(String lotInTime) {
        this.lotInTime = lotInTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getNgBin() {
        return ngBin;
    }

    public void setNgBin(String ngBin) {
        this.ngBin = ngBin;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
