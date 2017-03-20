package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-20.
 */
public class SettingsDto {
    private int settingId    = 0;    //
    private int ordering     = 0;    // 설정값 정렬에 사용
    private String betsKey   = "";   // 설정에 사용하는 키값
    private String betsValue = "";   // 설정값

    public int getSettingId() {
        return settingId;
    }

    public void setSettingId(int settingId) {
        this.settingId = settingId;
    }

    public int getOrdering() {
        return ordering;
    }

    public void setOrdering(int ordering) {
        this.ordering = ordering;
    }

    public String getBetsKey() {
        return betsKey;
    }

    public void setBetsKey(String betsKey) {
        this.betsKey = betsKey;
    }

    public String getBetsValue() {
        return betsValue;
    }

    public void setBetsValue(String betsValue) {
        this.betsValue = betsValue;
    }

}
