package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-21.
 */
public class ComUserUsageCondDto {

    private String userId = "";          // 사용자ID
    private String uiId = "";            // 화면ID
    private String createDateStart = ""; // 생성일시시작
    private String createDateEnd = "";   // 생성일시끝

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUiId() {
        return uiId;
    }

    public void setUiId(String uiId) {
        this.uiId = uiId;
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
