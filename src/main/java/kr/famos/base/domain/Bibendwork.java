package kr.famos.base.domain;

/**
 * Created by yhkim on 2017-01-31.
 */
public class Bibendwork {
    private String boardType = "";    // BOARD TYPE
    private String serialNo = "";     // SERIAL NO
    private String eqpid = "";        // 설비 ID
    private String lotidInsert = "";  // LOT ID
    private String bibInsert = "";    // BIB 정보
    private String mask = "";         // MASK 정보
    private String boardCount = "";   // BOARD 수량
    private String sysDate = "";      // 수정시간
    private String partId = "";       // PART ID

    public String getBoardType() {
        return boardType;
    }

    public void setBoardType(String boardType) {
        this.boardType = boardType;
    }

    public String getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(String serialNo) {
        this.serialNo = serialNo;
    }

    public String getEqpid() {
        return eqpid;
    }

    public void setEqpid(String eqpid) {
        this.eqpid = eqpid;
    }

    public String getLotidInsert() {
        return lotidInsert;
    }

    public void setLotidInsert(String lotidInsert) {
        this.lotidInsert = lotidInsert;
    }

    public String getBibInsert() {
        return bibInsert;
    }

    public void setBibInsert(String bibInsert) {
        this.bibInsert = bibInsert;
    }

    public String getMask() {
        return mask;
    }

    public void setMask(String mask) {
        this.mask = mask;
    }

    public String getBoardCount() {
        return boardCount;
    }

    public void setBoardCount(String boardCount) {
        this.boardCount = boardCount;
    }

    public String getSysDate() {
        return sysDate;
    }

    public void setSysDate(String sysDate) {
        this.sysDate = sysDate;
    }

    public String getPartId() {
        return partId;
    }

    public void setPartId(String partId) {
        this.partId = partId;
    }

}
