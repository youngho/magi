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
        userChartCond.setSettingUser("devdev");
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


            condDto.setEndTimeStart("20170900000000");  //3개월전 데이터 셋팅
            condDto.setEndTimeEnd("20171199999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("3M"));
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            logger.debug("총개수 : " + chartItemDto.getTav());
            logger.debug("YIELD : " + chartItemDto.getPrec());
            axesChartDtoList.add(chartItemDto);


            condDto.setEndTimeStart("20171000000000");  //2개월전 데이터 셋팅
            condDto.setEndTimeEnd("20171199999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("2M"));
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("20171100000000");  //1개월전 데이터 셋팅
            condDto.setEndTimeEnd("20171199999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("1M"));
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("20171203000000");  //3주전 데이터 셋팅
            condDto.setEndTimeEnd("20171223999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon("3W");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("20171210000000");  //2주전 데이터 셋팅
            condDto.setEndTimeEnd("20171223999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            chartItemDto.setMon("2W");
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("20171217000000");  //1주전 데이터 셋팅
            condDto.setEndTimeEnd("20171223999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon("1W");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("20171224000000");  //3일전 데이터 셋팅
            condDto.setEndTimeEnd("20171226999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("3D"));
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("20171225000000");  //2일전 데이터 셋팅
            condDto.setEndTimeEnd("20171226999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("2D"));
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart("20171226000000");  //1일전 데이터 셋팅
            condDto.setEndTimeEnd("20171226999999");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("1D"));
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
        Calendar cal = new GregorianCalendar(Locale.KOREA);
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
            case "1W":
                break;
            case "2W":
                break;
            case "3W":
                break;
            case "1M":
                cal.add(Calendar.MONTH, -1); // 한달을 뺀다.
                returnStr = monthTime.format(cal.getTime());
                break;
            case "2M":
                cal.add(Calendar.MONTH, -2); // 두달을 뺀다.
                returnStr = monthTime.format(cal.getTime());
                break;
            case "3M":
                cal.add(Calendar.MONTH, -3); // 세달을 뺀다.
                returnStr = monthTime.format(cal.getTime());
                break;
        }
        return returnStr;
    }
}
