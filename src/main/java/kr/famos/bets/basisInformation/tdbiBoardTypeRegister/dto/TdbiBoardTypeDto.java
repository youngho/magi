package kr.famos.bets.basisInformation.tdbiBoardTypeRegister.dto;

/**
 * Created by yhkim on 2017-02-27.
 */
public class TdbiBoardTypeDto {

    private String boardTypeNo = ""; // 보드 넘버 앞 4자리
    private int xSocketQty     = 0;  // X축 소켓 개수
    private int ySocketQty     = 0;  // Y축 소켓 개수
    private String tdbiBoardTypeDescription = ""; // 보드 설명

    public String getBoardTypeNo() {
        return boardTypeNo;
    }

    public void setBoardTypeNo(String boardTypeNo) {
        this.boardTypeNo = boardTypeNo;
    }

    public int getxSocketQty() {
        return xSocketQty;
    }

    public void setxSocketQty(int xSocketQty) {
        this.xSocketQty = xSocketQty;
    }

    public int getySocketQty() {
        return ySocketQty;
    }

    public void setySocketQty(int ySocketQty) {
        this.ySocketQty = ySocketQty;
    }

    public String getTdbiBoardTypeDescription() {
        return tdbiBoardTypeDescription;
    }

    public void setTdbiBoardTypeDescription(String tdbiBoardTypeDescription) {
        this.tdbiBoardTypeDescription = tdbiBoardTypeDescription;
    }
}
