package kr.famos.bets.tdbiAnalysis.tdbiDc.dto;

/**
 * BETS-UI-0506 : TDBI DC
 */
public class TdbiDcResultDto {
    private String endTime = "";
    private String operatorId = "";
    private String partNumber = "";
    private String processCode = "";
    private String testNumber = "";
    private String lotId = ""; //
    private String mainProgramName = ""; //

    private int input;
    private int pass;
    private float yield;
    private int bin1;
    private int bin2;
    private int bin3;
    private int bin4;
    private int bin5;
    private int bin6;
    private int bin7;
    private int bin8;
    private int bin9;

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(String operatorId) {
        this.operatorId = operatorId;
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

    public int getInput() {
        return input;
    }

    public void setInput(int input) {
        this.input = input;
    }

    public int getPass() {
        return pass;
    }

    public void setPass(int pass) {
        this.pass = pass;
    }

    public float getYield() {
        return yield;
    }

    public void setYield(float yield) {
        this.yield = yield;
    }

    public int getBin1() {
        return bin1;
    }

    public void setBin1(int bin1) {
        this.bin1 = bin1;
    }

    public int getBin2() {
        return bin2;
    }

    public void setBin2(int bin2) {
        this.bin2 = bin2;
    }

    public int getBin3() {
        return bin3;
    }

    public void setBin3(int bin3) {
        this.bin3 = bin3;
    }

    public int getBin4() {
        return bin4;
    }

    public void setBin4(int bin4) {
        this.bin4 = bin4;
    }

    public int getBin5() {
        return bin5;
    }

    public void setBin5(int bin5) {
        this.bin5 = bin5;
    }

    public int getBin6() {
        return bin6;
    }

    public void setBin6(int bin6) {
        this.bin6 = bin6;
    }

    public int getBin7() {
        return bin7;
    }

    public void setBin7(int bin7) {
        this.bin7 = bin7;
    }

    public int getBin8() {
        return bin8;
    }

    public void setBin8(int bin8) {
        this.bin8 = bin8;
    }

    public int getBin9() {
        return bin9;
    }

    public void setBin9(int bin9) {
        this.bin9 = bin9;
    }
}