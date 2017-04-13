package kr.famos.bets.rawData.dto;

/**
 * Created by yhkim on 2017-03-11.
 */
public class RawDataResultDto {
    private String location   = ""; // 파일위치
    private String fileName   = ""; // 파일이름
    private String createDate = ""; // 파일생성일시
    private String fileType   = ""; //

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
}
