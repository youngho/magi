package kr.famos.bets.yieldAnalysis.subbin.dto;

import kr.famos.com.dto.ProgramHeaderDto;

/**
 * Created by yhkim on 2017-02-27.
 */
public class SubBinDto extends ProgramHeaderDto {
    private int seq              = 0;  //
    private String subBin        = ""; // SUB_BIN

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    public String getSubBin() {
        return subBin;
    }

    public void setSubBin(String subBin) {
        this.subBin = subBin;
    }
}
