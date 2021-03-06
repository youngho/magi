package kr.famos.bets.tdbiAnalysis.dataSummary.dto;

/**
 * Created by yhkim on 2017-03-13.
 */
public class DataSummaryResultDto {

    private String partNumber = ""; //
    private String lotId = ""; //
    private String startTime = ""; //
    private String endTime = ""; //
    private String testerModel = ""; //
    private String testerNumber = "";  //
//    private String processCode = "";  // TDBI는 RAW파일에 ProcessCode가 기록되어 있지 않아 보드의 앞 4자리를 사용했으나, 혼란스러워서 사용하지 않기로 함
    private String mainProgramName = ""; //

    private int input1;      //Input1=(Bin1+Bin2+Bin3+Bin4+Bin5+Bin6+Bin7+Bin8+Bin9)
    private int input2;     //Input2=(Bin1+Bin2+Bin3+Bin4+Bin5+Bin6+Bin7)
    private int pass;
    private float yield1;    //Yield1 = Bin1/(Bin1+Bin2+Bin3+Bin4+Bin5+Bin6+Bin7+Bin8+Bin9)
    private float yield2;   //Yield2 = Bin1/(Bin1+Bin2+Bin3+Bin4+Bin5+Bin6+Bin7)
    private float pda;      //PDA = Bin4/(Bin1+Bin2+Bin3+Bin4+Bin5+Bin6+Bin7)
    private int bin0;
    private int bin1;
    private int bin2;
    private int bin3;
    private int bin4;
    private int bin5;
    private int bin6;
    private int bin7;
    private int bin8;
    private int bin9;
    private int bin10;
    private int bin11;
    private int bin12;
    private int bin13;
    private int bin14;
    private int bin15;

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
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

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public int getInput1() {
        return input1;
    }

    public void setInput1(int input1) {
        this.input1 = input1;
    }

    public int getInput2() {
        return input2;
    }

    public void setInput2(int input2) {
        this.input2 = input2;
    }

    public int getPass() {
        return pass;
    }

    public void setPass(int pass) {
        this.pass = pass;
    }

    public float getYield1() {
        return yield1;
    }

    public void setYield1(float yield1) {
        this.yield1 = yield1;
    }

    public float getYield2() {
        return yield2;
    }

    public void setYield2(float yield2) {
        this.yield2 = yield2;
    }

    public float getPda() {
        return pda;
    }

    public void setPda(float pda) {
        this.pda = pda;
    }

    public int getBin0() {
        return bin0;
    }

    public void setBin0(int bin0) {
        this.bin0 = bin0;
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

    public int getBin10() {
        return bin10;
    }

    public void setBin10(int bin10) {
        this.bin10 = bin10;
    }

    public int getBin11() {
        return bin11;
    }

    public void setBin11(int bin11) {
        this.bin11 = bin11;
    }

    public int getBin12() {
        return bin12;
    }

    public void setBin12(int bin12) {
        this.bin12 = bin12;
    }

    public int getBin13() {
        return bin13;
    }

    public void setBin13(int bin13) {
        this.bin13 = bin13;
    }

    public int getBin14() {
        return bin14;
    }

    public void setBin14(int bin14) {
        this.bin14 = bin14;
    }

    public int getBin15() {
        return bin15;
    }

    public void setBin15(int bin15) {
        this.bin15 = bin15;
    }
}