package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-06.
 */
public class NgBinDto extends ProgramHeaderDto{
    private String mainBin           = ""; //
    private String ngBin             = ""; //

    public String getMainBin() {
        return mainBin;
    }

    public void setMainBin(String mainBin) {
        this.mainBin = mainBin;
    }

    public String getNgBin() {
        return ngBin;
    }

    public void setNgBin(String ngBin) {
        this.ngBin = ngBin;
    }
}
