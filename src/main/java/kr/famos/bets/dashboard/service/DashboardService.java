package kr.famos.bets.dashboard.service;

import kr.famos.bets.dashboard.dto.*;
import kr.famos.bets.dashboard.mapper.DashboardMapper;
import kr.famos.com.dto.ComSettingsDto;
import kr.famos.com.mapper.SettingsMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by yhkim on 2017-03-13.
 */
@Service
public class DashboardService {

    private static final Logger logger = LoggerFactory.getLogger(DashboardService.class);

    @Autowired
    DashboardMapper dashboardMapper;

    @Autowired
    SettingsMapper settingsMapper;

    //    public DashboardDto retrieveDashboard(DashboardDto dashboardDto) {
    public DashboardDto retrieveDashboard(DashboardDto dashboardDto) {

        DashboardDto returnDto = new DashboardDto();


        ComSettingsDto userChartCond = new ComSettingsDto();
        userChartCond.setSettingUser("admin");
        userChartCond.setBetsKey("Dashboard.Chart.Kind");
        List<ComSettingsDto> userChartList = settingsMapper.retrieveSettings(userChartCond);

        for (ComSettingsDto list : userChartList) {
            logger.debug("Setting의 Dashboard.Chart.Kind 종류 : " + list.getBetsValue());

            ProcessChartDto processChartDto = new ProcessChartDto();
            List<AxesChartDto> axesChartDtoList = new ArrayList<>();
            AxesChartDto chartItemDto = new AxesChartDto();


            //COM_SETTING 에서 해당 사용자의 설정 값을 가지고 Dashboard를 보여준다.
            AxesChartCondDto condDto = new AxesChartCondDto();
            condDto.setProcessCode(list.getBetsValue());
            processChartDto.setProcessCode(condDto.getProcessCode());


            condDto.setEndTimeStart(RetrieveRange("3M").getStartDate());  //3개월전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("3M").getEndDate());
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("3M") + "M");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            logger.debug("총개수 : " + chartItemDto.getCapa());
            logger.debug("YIELD : " + chartItemDto.getYield());
            axesChartDtoList.add(chartItemDto);


            condDto.setEndTimeStart(RetrieveRange("2M").getStartDate());  //2개월전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("2M").getEndDate());
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("2M") + "M");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart(RetrieveRange("1M").getStartDate());  //1개월전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("1M").getEndDate());
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("1M") + "M");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("");  //3주전 데이터 셋팅
            condDto.setEndTimeEnd("");
            condDto.setWorkWeek("3W");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon("WW" + dashboardMapper.retrieveWorkWeek(condDto));      // 대시보드 아래쪽 데이터 항목 이름
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("");  //2주전 데이터 셋팅
            condDto.setEndTimeEnd("");
            condDto.setWorkWeek("2W");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon("WW" + dashboardMapper.retrieveWorkWeek(condDto));      // 대시보드 아래쪽 데이터 항목 이름
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("");  //1주전 데이터 셋팅
            condDto.setEndTimeEnd("");
            condDto.setWorkWeek("1W");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon("WW" + dashboardMapper.retrieveWorkWeek(condDto));      // 대시보드 아래쪽 데이터 항목 이름
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setWorkWeek("");

            condDto.setEndTimeStart(RetrieveRange("3D").getStartDate());  //3일전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("3D").getEndDate());
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("3D") + "D");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart(RetrieveRange("2D").getStartDate());  //2일전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("2D").getEndDate());
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("2D") + "D");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart(RetrieveRange("1D").getStartDate());  //1일전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("1D").getEndDate());
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("1D") + "D");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            processChartDto.setChart(axesChartDtoList);
            returnDto.getProcessChartList().add(processChartDto);
        } // userChartList

        returnDto.setChangeControl(dashboardMapper.retrieveChangControl());

        returnDto.setLowYieldLot(dashboardMapper.retrieveLowYieldLot());

        //TODO OCAP 노가다작업

        List<OcapDto> tempDtoList = new ArrayList<>();
        OcapDto tempDto = new OcapDto();
        tempDto.setLotId("DC3SKD-912Q");
        tempDto.setOper("T0220");
        tempDto.setSblCode("H50");
        tempDto.setTransTime("06:02");
        tempDto.setStatus("Hold");
        tempDtoList.add(tempDto);
        tempDto = new OcapDto();

        tempDto.setLotId("DC3SKD-912Q");
        tempDto.setOper("T0220");
        tempDto.setSblCode("");
        tempDto.setTransTime("06:02");
        tempDto.setStatus("Release");
        tempDtoList.add(tempDto);
        tempDto = new OcapDto();

        tempDto.setLotId("DC3SKD-912Q");
        tempDto.setOper("T0220");
        tempDto.setSblCode("H60");
        tempDto.setTransTime("06:02");
        tempDto.setStatus("Hold");
        tempDtoList.add(tempDto);
        tempDto = new OcapDto();

        tempDto.setLotId("DC3SKD-912Q");
        tempDto.setOper("T0220");
        tempDto.setSblCode("H40");
        tempDto.setTransTime("06:02");
        tempDto.setStatus("Hold");
        tempDtoList.add(tempDto);
        tempDto = new OcapDto();

        tempDto.setLotId("DC3SKD-912Q");
        tempDto.setOper("T0220");
        tempDto.setSblCode("H20");
        tempDto.setTransTime("06:02");
        tempDto.setStatus("Hold");
        tempDtoList.add(tempDto);

        returnDto.setOcap(tempDtoList);

        return returnDto;
    }

    /**
     * 차트의 yieldMax, YieldMin을 구하기 위한 작업
     *
     * @param chartDetailCondDto
     * @return
     */
    public ChartDetailDto retrieveChartDetail(ChartDetailCondDto chartDetailCondDto) {

        ChartDetailDto returnDto = new ChartDetailDto();
        List<ChartDetailItemDto> chartDetailItemDtoList = dashboardMapper.retrieveChartDetail(chartDetailCondDto);

        float tempYieldMax = 0;
        float tempYieldMin = 100;
        for (ChartDetailItemDto list : chartDetailItemDtoList) {
            if (tempYieldMax < list.getYield()) {
                tempYieldMax = list.getYield();
            }
            if (tempYieldMin > list.getYield()) {
                tempYieldMin = list.getYield();
            }
        }

        returnDto.setYieldMax(tempYieldMax);
        returnDto.setYieldMin(tempYieldMin);
        returnDto.setYieldItemList(chartDetailItemDtoList);
        return returnDto;
    }

    /**
     *
     * @param itemName
     * @return String 형식의 실제 일자, 워크주,
     */
    private String chartItemNameChange(String itemName) {
        String returnStr = "";

        //시스템 시간을 구해서 createDate에 넣는다.
        long time = System.currentTimeMillis();
//        SimpleDateFormat dayTime = new SimpleDateFormat("yyyyMMddHHmmss");
        SimpleDateFormat dayTime = new SimpleDateFormat("dd");
        SimpleDateFormat monthTime = new SimpleDateFormat("MM");
        Calendar cal = new GregorianCalendar(Locale.getDefault());
        cal.setTime(new Date());


        switch (itemName) {
            case "1D":
                cal.add(Calendar.DAY_OF_YEAR, -1); // 하루를 뺀다
                returnStr = dayTime.format(cal.getTime());
                break;
            case "2D":
                cal.add(Calendar.DAY_OF_YEAR, -2); // 이틀을 뺀다
                returnStr = dayTime.format(cal.getTime());
                break;
            case "3D":
                cal.add(Calendar.DAY_OF_YEAR, -3); // 이틀을 뺀다
                returnStr = dayTime.format(cal.getTime());
                break;
            // 워크 위크는 기간을 조회하는것이 아니라 MAIN_BIN 테이블의 WORK_WEEK 컬럼의 값을 조회한다.
            case "1M":
                cal.add(Calendar.MONTH, -1); // 한달을 뺀다.
                returnStr = monthTime.format(cal.getTime()).replaceAll("0","");
                break;
            case "2M":
                cal.add(Calendar.MONTH, -2); // 두달을 뺀다.
                returnStr = monthTime.format(cal.getTime()).replaceAll("0","");
                break;
            case "3M":
                cal.add(Calendar.MONTH, -3); // 세달을 뺀다.
                returnStr = monthTime.format(cal.getTime()).replaceAll("0","");
                break;
        }
        return returnStr;
    }

    private RetrieveRangeDto RetrieveRange(String retrieveValue){
        RetrieveRangeDto returnDto = new RetrieveRangeDto();
        //TODO
        SimpleDateFormat dtStartFormat = new SimpleDateFormat("yyyyMMdd000000");
        SimpleDateFormat dtEndFormat = new SimpleDateFormat("yyyyMMdd999999");
        Calendar cal = new GregorianCalendar(Locale.getDefault());
        cal.setTime(new Date());

        switch (retrieveValue) {
            case "1D":
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                cal.add(Calendar.DAY_OF_YEAR, -1); // 하루를 뺀다
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                break;
            case "2D":
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                logger.debug("setStartDate : " + dtStartFormat.format(cal.getTime()));
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                cal.add(Calendar.DAY_OF_YEAR, -2); // 이틀을 뺀다
                logger.debug("setEndDate : " + dtEndFormat.format(cal.getTime()));
                break;
            case "3D":
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                cal.add(Calendar.DAY_OF_YEAR, -3); // 사흘을 뺀다
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                break;
            case "1W":
                break;
            case "2W":
                break;
            case "3W":
                break;
            case "1M":
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                cal.add(Calendar.MONTH, -1); // 한달을 뺀다.
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                break;
            case "2M":
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                cal.add(Calendar.MONTH, -2); // 두달을 뺀다.
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                break;
            case "3M":
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                cal.add(Calendar.MONTH, -3); // 세달을 뺀다.
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                break;
        }

        return returnDto;

    }
}
