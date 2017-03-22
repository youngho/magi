package kr.famos.bets.dashboard.dto;

import javax.swing.*;

/**
 * Created by yhkim on 2017-03-22.
 */
public class ChangeControlDto {
    private String action = "";
    private String traget = "";
    private String time = "";

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getTraget() {
        return traget;
    }

    public void setTraget(String traget) {
        this.traget = traget;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
