package kr.famos.bets.history.lcRevision.dto;

/**
 * Created by yhkim on 2017-03-11.
 */
public class LcRevisionDto {
    private String testerModel = "";    //
    private String lcVersion = "";    //
    private String changeWhy = "";    //
    private String createDate = "";    //
    private String createUser = "";    //

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