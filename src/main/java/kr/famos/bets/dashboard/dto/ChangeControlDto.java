package kr.famos.bets.dashboard.dto;

import javax.swing.*;

/**
 * Created by yhkim on 2017-03-22.
 */
public class ChangeControlDto {
    private String action = "";
    private String target = "";
    private String time = "";

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
