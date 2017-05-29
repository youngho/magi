package kr.famos.bets.history.chipId.dto;

/**
 * BETS-UI-0805 : Chip ID Duplicate
 */
public class ChipIdResultDto {
    private String fastTesterNumber    = ""; /*// 이전 TESTER 번호(Host id)*/
    private String fastTesterModel     = ""; /*// 이전 TESTER MODEL NAME*/
    private String fastLotId           = ""; /*// 이전 LOT ID*/
    private String fastProcessCode     = ""; /*// 이전 BETS에서 내려주는 기준정보 PROCESS CODE*/
    private String fastPartNumber      = ""; /*// 이전 BETS에서 내려주는 기준정보 PART NUMBER*/
    private String fastMainProgramName = ""; /*// 이전BETS에서 내려주는 기준정보 MAIN PROGRAM NAME*/
    private String fastFirmwareName    = ""; /*// 이전 BETS에서 내려주는 기준정보 FIREWARE NAME*/
    private String fastFirmwareVersion = ""; /*// 이전 BETS에서 내려주는 기준정보 FIRMWARE VERSION*/
    private String fastFileCreateTime  = ""; /*// 이전 CID 생성 날자*/
    private int fastDutNo              = 0;  /*// 이전 DUT NO*/
    private String fastCid             = ""; /*// 이전 CID_NUMBER*/
    private String testerNumber        = ""; /*// TESTER 번호(Host id)*/
    private String testerModel         = ""; /*// TESTER MODEL NAME*/
    private String lotId               = ""; /*// LOT ID*/
    private String processCode         = ""; /*// BETS에서 내려주는 기준정보 PROCESS CODE*/
    private String partNumber          = ""; /*// BETS에서 내려주는 기준정보 PART NUMBER*/
    private String mainProgramName     = ""; /*// BETS에서 내려주는 기준정보 MAIN PROGRAM NAME*/
    private String firmwareName        = ""; /*// BETS에서 내려주는 기준정보 FIREWARE NAME*/
    private String firmwareVersion     = ""; /*// BETS에서 내려주는 기준정보 FIRMWARE VERSION*/
    private String fileCreateTime      = ""; /*// CID 생성 날자*/
    private int dutNo                  = 0;  /*// DUT NO*/
    private String cid                 = ""; /*// CID_NUMBER*/

    public String getFastTesterNumber() {
        return fastTesterNumber;
    }

    public void setFastTesterNumber(String fastTesterNumber) {
        this.fastTesterNumber = fastTesterNumber;
    }

    public String getFastTesterModel() {
        return fastTesterModel;
    }

    public void setFastTesterModel(String fastTesterModel) {
        this.fastTesterModel = fastTesterModel;
    }

    public String getFastLotId() {
        return fastLotId;
    }

    public void setFastLotId(String fastLotId) {
        this.fastLotId = fastLotId;
    }

    public String getFastProcessCode() {
        return fastProcessCode;
    }

    public void setFastProcessCode(String fastProcessCode) {
        this.fastProcessCode = fastProcessCode;
    }

    public String getFastPartNumber() {
        return fastPartNumber;
    }

    public void setFastPartNumber(String fastPartNumber) {
        this.fastPartNumber = fastPartNumber;
    }

    public String getFastMainProgramName() {
        return fastMainProgramName;
    }

    public void setFastMainProgramName(String fastMainProgramName) {
        this.fastMainProgramName = fastMainProgramName;
    }

    public String getFastFirmwareName() {
        return fastFirmwareName;
    }

    public void setFastFirmwareName(String fastFirmwareName) {
        this.fastFirmwareName = fastFirmwareName;
    }

    public String getFastFirmwareVersion() {
        return fastFirmwareVersion;
    }

    public void setFastFirmwareVersion(String fastFirmwareVersion) {
        this.fastFirmwareVersion = fastFirmwareVersion;
    }

    public String getFastFileCreateTime() {
        return fastFileCreateTime;
    }

    public void setFastFileCreateTime(String fastFileCreateTime) {
        this.fastFileCreateTime = fastFileCreateTime;
    }

    public int getFastDutNo() {
        return fastDutNo;
    }

    public void setFastDutNo(int fastDutNo) {
        this.fastDutNo = fastDutNo;
    }

    public String getFastCid() {
        return fastCid;
    }

    public void setFastCid(String fastCid) {
        this.fastCid = fastCid;
    }

    public String getTesterNumber() {
        return testerNumber;
    }

    public void setTesterNumber(String testerNumber) {
        this.testerNumber = testerNumber;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getLotId() {
        return lotId;
    }

    public void setLotId(String lotId) {
        this.lotId = lotId;
    }

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public String getMainProgramName() {
        return mainProgramName;
    }

    public void setMainProgramName(String mainProgramName) {
        this.mainProgramName = mainProgramName;
    }

    public String getFirmwareName() {
        return firmwareName;
    }

    public void setFirmwareName(String firmwareName) {
        this.firmwareName = firmwareName;
    }

    public String getFirmwareVersion() {
        return firmwareVersion;
    }

    public void setFirmwareVersion(String firmwareVersion) {
        this.firmwareVersion = firmwareVersion;
    }

    public String getFileCreateTime() {
        return fileCreateTime;
    }

    public void setFileCreateTime(String fileCreateTime) {
        this.fileCreateTime = fileCreateTime;
    }

    public int getDutNo() {
        return dutNo;
    }

    public void setDutNo(int dutNo) {
        this.dutNo = dutNo;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }
}