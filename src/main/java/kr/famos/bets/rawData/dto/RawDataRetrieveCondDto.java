package kr.famos.bets.rawData.dto;

/**
 * Created by yhkim on 2017-03-11.
 */
public class RawDataRetrieveCondDto {
    private String location   = ""; // 파일위치
    private String fileName   = ""; // 파일이름
    private String createDate = ""; // 파일생성일시
    private String fileType   = ""; //

    private String createDateStart  = ""; // 생성일시시작
    private String createDateEnd    = ""; // 생성일시끝

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
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
