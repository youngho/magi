package kr.famos.bets.basisInformation.binDescription.dto;

/**
 * Created by yhkim on 2017-02-21.
 */
public class BinDescriptionDto {

    private String partNumber = "";    //
    private String mainProgramName = "";    //
    private String processCode = "";    //
    private String testerModel = "";    //
    private String itemName = "";    //
    private String mainBin = "";    //
    private String subBin = "";    //
    private String ngBin = "";    //

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

    public String getProcessCode() {
        return processCode;
    }

    public void setProcessCode(String processCode) {
        this.processCode = processCode;
    }

    public String getTesterModel() {
        return testerModel;
    }

    public void setTesterModel(String testerModel) {
        this.testerModel = testerModel;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getMainBin() {
        return mainBin;
    }

    public void setMainBin(String mainBin) {
        this.mainBin = mainBin;
    }

    public String getSubBin() {
        return subBin;
    }

    public void setSubBin(String subBin) {
        this.subBin = subBin;
    }

    public String getNgBin() {
        return ngBin;
    }

    public void setNgBin(String ngBin) {
        this.ngBin = ngBin;
    }
}
