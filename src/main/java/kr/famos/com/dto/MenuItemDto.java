package kr.famos.com.dto;

/**
 * Created by yhkim on 2017-03-21.
 */
public class MenuItemDto {
    private String text = "";
    private String url = "";
    private String alias = "";

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

}
