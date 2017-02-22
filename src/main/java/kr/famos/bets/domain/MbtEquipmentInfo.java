package kr.famos.bets.domain;

/**
 * Created by yhkim on 2017-01-31.
 */
public class MbtEquipmentInfo {
    private String equipId	= "";	// 설비 ID
    private String model	= "";	// 설비 모델
    private String ipAddr	= "";	// 설비 주소
    private String machineName	= "";	// 설비 이름
    public String getEquipId() {
        return equipId;
    }
    public void setEquipId(String equipId) {
        this.equipId = equipId;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public String getIpAddr() {
        return ipAddr;
    }
    public void setIpAddr(String ipAddr) {
        this.ipAddr = ipAddr;
    }
    public String getMachineName() {
        return machineName;
    }
    public void setMachineName(String machineName) {
        this.machineName = machineName;
    }

}