package kr.famos.bets.basisInformation.lcVersionRegister.dto;

/**
 * Created by yhkim on 2017-02-21.
 *
 * 반도체 테스트 기준정보 테이블 PROGRAM_REGISTER
 * 테스트 장비와 테스트 프로그램에 대한 정보
 */
public class LcVersionRegisterDto {

    private String testerModel = ""; // TESTER 번호
    private String lcVersion   = ""; // T0350
    private String changeWhy   = ""; // H9TQ17ABJTA-CUR
    private String createDate  = "";
    private String createUser  = "";

    private String createDateStart = ""; // 생성일시시작
    private String createDateEnd = ""; // 생성일시끝

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getLcVersion() {
        return lcVersion;
    }

    public void setLcVersion(String lcVersion) {
        this.lcVersion = lcVersion;
    }

    public String getChangeWhy() {
        return changeWhy;
    }

    public void setChangeWhy(String changeWhy) {
        this.changeWhy = changeWhy;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
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
}