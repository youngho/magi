package kr.famos.bets.dashboard.dto;

/**
 * Created by yhkim on 2017-03-22.
 */
public class LowYieldBoardDto {
    private String boardId = "";
    private String yield = "";
    private String date = "";

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getYield() {
        return yield;
    }

    public void setYield(String yield) {
        this.yield = yield;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
