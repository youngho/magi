package kr.famos.bets.history.chipId.dto;

/**
 * BETS-UI-0805 : Chip ID Duplicate
 */
public class ChipIdCondDto {
//    private String fastTesterNumber    = ""; /*// 이전 TESTER 번호(Host id)*/
//    private String fastTesterModel     = ""; /*// 이전 TESTER MODEL NAME*/
//    private String fastLotId           = ""; /*// 이전 LOT ID*/
//    private String fastProcessCode     = ""; /*// 이전 BETS에서 내려주는 기준정보 PROCESS CODE*/
//    private String fastPartNumber      = ""; /*// 이전 BETS에서 내려주는 기준정보 PART NUMBER*/
//    private String fastMainProgramName = ""; /*// 이전BETS에서 내려주는 기준정보 MAIN PROGRAM NAME*/
//    private String fastFirmwareName    = ""; /*// 이전 BETS에서 내려주는 기준정보 FIREWARE NAME*/
//    private String fastFirmwareVersion = ""; /*// 이전 BETS에서 내려주는 기준정보 FIRMWARE VERSION*/
//    private String fastFileCreateTime  = ""; /*// 이전 CID 생성 날자*/
//    private int fastDutNo              = 0;  /*// 이전 DUT NO*/
//    private String fastCid             = ""; /*// 이전 CID_NUMBER*/
//    private String testerNumber        = ""; /*// TESTER 번호(Host id)*/
//    private String testerModel         = ""; /*// TESTER MODEL NAME*/
    private String lotId               = ""; /*// LOT ID*/
//    private String processCode         = ""; /*// BETS에서 내려주는 기준정보 PROCESS CODE*/
//    private String partNumber          = ""; /*// BETS에서 내려주는 기준정보 PART NUMBER*/
//    private String mainProgramName     = ""; /*// BETS에서 내려주는 기준정보 MAIN PROGRAM NAME*/
//    private String firmwareName        = ""; /*// BETS에서 내려주는 기준정보 FIREWARE NAME*/
//    private String firmwareVersion     = ""; /*// BETS에서 내려주는 기준정보 FIRMWARE VERSION*/
//    private String fileCreateTime      = ""; /*// CID 생성 날자*/
//    private int dutNo                  = 0;  /*// DUT NO*/
    private String cid                 = ""; /*// CID_NUMBER*/

    private String fileCreateTimeStart = "";
    private String fileCreateTimeEnd   = "";

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getFileCreateTimeStart() {
        return fileCreateTimeStart;
    }

    public void setFileCreateTimeStart(String fileCreateTimeStart) {
        this.fileCreateTimeStart = fileCreateTimeStart;
    }

    public String getFileCreateTimeEnd() {
        return fileCreateTimeEnd;
    }

    public void setFileCreateTimeEnd(String fileCreateTimeEnd) {
        this.fileCreateTimeEnd = fileCreateTimeEnd;
    }
}