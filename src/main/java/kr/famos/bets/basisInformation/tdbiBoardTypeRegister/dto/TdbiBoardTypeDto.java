package kr.famos.bets.basisInformation.tdbiBoardTypeRegister.dto;

/**
 * Created by yhkim on 2017-02-27.
 */
public class TdbiBoardTypeDto {
    private String boardTypeId = ""; // 테이블 KEY
    private String boardTypeNo = ""; // 보드 넘버 앞 4자리
    private int xSocketQty     = 0;  // X축 소켓 개수
    private int ySocketQty     = 0;  // Y축 소켓 개수

    public String getBoardTypeId() {
        return boardTypeId;
    }

    public void setBoardTypeId(String boardTypeId) {
        this.boardTypeId = boardTypeId;
    }

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
}
