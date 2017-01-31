package kr.famos.base.domain;

/**
 * Created by yhkim on 2017-01-31.
 */
public class EquipmentLayout {
    private String tester = "";    // 설비 ID
    private String ip = "";    // IP주소

    public String getTester() {
        return tester;
    }

    public void setTester(String tester) {
        this.tester = tester;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

}
