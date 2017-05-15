package kr.famos.bets.rawData.dto;

/**
 * BETS-UI-0701
 * Test RAW Data
 * Test 공정에서 발생한 RAW Data를 조회한다
 *
 * BETS-UI-0702
 * TDBI RAW Data
 * TDBI 공정에서 발생한 RAW Data를 조회한다
 *
 * 두 화면의 조회 테이블이 같고, 조회 파리미터의 값만 달라지기 때문에 같은 모델을 사용한다
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
