package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-03.
 */
public class MainBinDto extends ProgramHeaderDto{
    private String testBin           = ""; //
    private String handlerBin        = ""; //
    private String opBin             = ""; //

    public String getTestBin() {
        return testBin;
    }

    public void setTestBin(String testBin) {
        this.testBin = testBin;
    }

    public String getHandlerBin() {
        return handlerBin;
    }

    public void setHandlerBin(String handlerBin) {
        this.handlerBin = handlerBin;
    }

    public String getOpBin() {
        return opBin;
    }

    public void setOpBin(String opBin) {
        this.opBin = opBin;
    }
}
