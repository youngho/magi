package kr.famos.bets.tdbiAnalysis.boardCompositeSocketYield.dto;

/**
 * BETS-UI-0507 : BoardCompositeSocketYield
 * 보드의 소켓별 수율을 볼 수 있는 화면
 */
public class BoardCompositeSocketYieldResultDto {

    private String biBoardId = "";
    private String biBoardRow = ""; // x축 시작,끝값
    private String biBoardColumn = ""; // y축 시작,끝값
    private String biSocketNumber = "";

    // DB 컬럼에 없는 변수, Service 에서 루프를 돌기위해 사용한다
    private String strSocketNumber = "";

    private int rowStart = 0;
    private int rowEnd = 0;
    private int rowMax = 0;

    private int colStart = 0;
    private int colEnd = 0;
    private int colMax = 0;

    public String getBiBoardId() {
        return biBoardId;
    }

    public void setBiBoardId(String biBoardId) {
        this.biBoardId = biBoardId;
    }

    public String getBiBoardRow() {
        return biBoardRow;
    }

    public void setBiBoardRow(String biBoardRow) {
        this.biBoardRow = biBoardRow;
    }

    public String getBiBoardColumn() {
        return biBoardColumn;
    }

    public void setBiBoardColumn(String biBoardColumn) {
        this.biBoardColumn = biBoardColumn;
    }

    public String getBiSocketNumber() {
        return biSocketNumber;
    }

    public void setBiSocketNumber(String biSocketNumber) {
        this.biSocketNumber = biSocketNumber;
    }

    public String getStrSocketNumber() {
        return strSocketNumber;
    }

    public void setStrSocketNumber(String strSocketNumber) {
        this.strSocketNumber = strSocketNumber;
    }

    public int getRowStart() {
        return rowStart;
    }

    public void setRowStart(int rowStart) {
        this.rowStart = rowStart;
    }

    public int getRowEnd() {
        return rowEnd;
    }

    public void setRowEnd(int rowEnd) {
        this.rowEnd = rowEnd;
    }

    public int getRowMax() {
        return rowMax;
    }

    public void setRowMax(int rowMax) {
        this.rowMax = rowMax;
    }

    public int getColStart() {
        return colStart;
    }

    public void setColStart(int colStart) {
        this.colStart = colStart;
    }

    public int getColEnd() {
        return colEnd;
    }

    public void setColEnd(int colEnd) {
        this.colEnd = colEnd;
    }

    public int getColMax() {
        return colMax;
    }

    public void setColMax(int colMax) {
        this.colMax = colMax;
    }
}