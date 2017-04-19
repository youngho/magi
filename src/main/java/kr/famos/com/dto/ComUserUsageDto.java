package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-21.
 */
public class ComUserUsageDto {
    private String createDate = "";      // 생성일시
    private String userId = "";          // 사용자ID
    private String uiId = "";            // 화면ID

    public String getCreateDate() {
        return createDate;
    }

    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

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

}
