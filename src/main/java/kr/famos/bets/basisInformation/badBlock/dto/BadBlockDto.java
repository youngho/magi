package kr.famos.bets.basisInformation.badBlock.dto;

/**
 * Created by yhkim on 2017-02-27.
 */
public class BadBlockDto {

    private String lotId = "";
    private String cid   = "";
    private String wf    = "";
    private int x        = 0;
    private int y        = 0;
    private int badCnt   = 0;

    public String getLodId() {
        return lotId;
    }

    public void setLodId(String lotId) {
        this.lotId = lotId;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getWf() {
        return wf;
    }

    public void setWf(String wf) {
        this.wf = wf;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getBadCnt() {
        return badCnt;
    }

    public void setBadCnt(int badCnt) {
        this.badCnt = badCnt;
    }
}