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
//            logger.debug("Setting의 Dashboard.Chart.Kind 종류 : " + list.getBetsValue());

            ProcessChartDto processChartDto = new ProcessChartDto();
            List<AxesChartDto> axesChartDtoList = new ArrayList<>();
            AxesChartDto chartItemDto = new AxesChartDto();


            //COM_SETTING 에서 해당 사용자의 설정 값을 가지고 Dashboard를 보여준다.
            AxesChartCondDto condDto = new AxesChartCondDto();
            condDto.setProcessCode(list.getBetsValue());
            processChartDto.setProcessCode(condDto.getProcessCode());


            condDto.setEndTimeStart(RetrieveRange("3M").getStartDate());  //3개월전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("3M").getEndDate());
//            logger.debug("3개월전 데이터");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("3M") + "M");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
//            logger.debug("총개수 : " + chartItemDto.getCapa());
//            logger.debug("YIELD : " + chartItemDto.getYield());
            axesChartDtoList.add(chartItemDto);


            condDto.setEndTimeStart(RetrieveRange("2M").getStartDate());  //2개월전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("2M").getEndDate());
//            logger.debug("2개월전 데이터");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("2M") + "M");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart(RetrieveRange("1M").getStartDate());  //1개월전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("1M").getEndDate());
//            logger.debug("1개월전 데이터");
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
//            logger.debug("1주전 데이터");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon("WW" + dashboardMapper.retrieveWorkWeek(condDto));      // 대시보드 아래쪽 데이터 항목 이름
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setWorkWeek("");    // 주차 초기화. 여기서 하지 않으면 날짜와 주차를 같이 조회하는 결과가 된다.

            condDto.setEndTimeStart(RetrieveRange("3D").getStartDate());  //3일전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("3D").getEndDate());
//            logger.debug("3일전 데이터");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("3D") + "D");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart(RetrieveRange("2D").getStartDate());  //2일전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("2D").getEndDate());
//            logger.debug("2일전 데이터");
            chartItemDto = dashboardMapper.retrieveAxesChartItem(condDto);
            chartItemDto.setMon(chartItemNameChange("2D") + "D");
            chartItemDto.setRangeStart(condDto.getEndTimeStart());
            chartItemDto.setRangeEnd(condDto.getEndTimeEnd());
            axesChartDtoList.add(chartItemDto);

            condDto.setEndTimeStart(RetrieveRange("1D").getStartDate());  //1일전 데이터 셋팅
            condDto.setEndTimeEnd(RetrieveRange("1D").getEndDate());
//            logger.debug("1일전 데이터");
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


        ChartDetailDto returnDto = new ChartDetailDto();    // 반환클래스 생성

//        logger.debug("차트 Detail 조회시 조회 항목의 문자열 길이 ::: " + chartDetailCondDto.getMon().length());
        String lastStr = chartDetailCondDto.getMon().substring(chartDetailCondDto.getMon().length() - 1);
//        logger.debug("조회 항목의 마지막 문자 ::: " + lastStr);
        chartDetailCondDto.setMon(lastStr); // mon변수에 선택된 항목의 이름이 들어온다. 제일 마지막 문자를 저장하여 'D'일 경우 쿼리에서 DATETIME를 다르게 리턴한다

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
                returnStr = monthTime.format(cal.getTime()).replaceAll("0", "");
                break;
            case "2M":
                cal.add(Calendar.MONTH, -2); // 두달을 뺀다.
                returnStr = monthTime.format(cal.getTime()).replaceAll("0", "");
                break;
            case "3M":
                cal.add(Calendar.MONTH, -3); // 세달을 뺀다.
                returnStr = monthTime.format(cal.getTime()).replaceAll("0", "");
                break;
        }
        return returnStr;
    }

    private RetrieveRangeDto RetrieveRange(String retrieveValue) {
        RetrieveRangeDto returnDto = new RetrieveRangeDto();
        //TODO
        SimpleDateFormat dtStartFormat = new SimpleDateFormat("yyyyMMdd000000");
        SimpleDateFormat dtStartMonth = new SimpleDateFormat("yyyyMM01000000");     // 해당 달의 시작일자 포맷
        SimpleDateFormat dtEndFormat = new SimpleDateFormat("yyyyMMdd235959");
        Calendar cal = new GregorianCalendar(Locale.getDefault());
        cal.setTime(new Date());
        int tempYear = 0;
        int tempMonth = 0;
        int tempDay = 0;
        switch (retrieveValue) {
            case "1D":
                cal.add(Calendar.DAY_OF_YEAR, -1); // 하루를 뺀다
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                break;
            case "2D":
                cal.add(Calendar.DAY_OF_YEAR, -2); // 이틀을 뺀다
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
//                logger.debug("setEndDate : " + dtEndFormat.format(cal.getTime()));
//                logger.debug("setStartDate : " + dtStartFormat.format(cal.getTime()));
                break;
            case "3D":
                cal.add(Calendar.DAY_OF_YEAR, -3); // 사흘을 뺀다
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                returnDto.setStartDate(dtStartFormat.format(cal.getTime()));
                break;
            case "1W":
                break;
            case "2W":
                break;
            case "3W":
                break;
            case "1M":
                cal.add(Calendar.MONTH, -1); // 한달을 뺀다.
                returnDto.setStartDate(dtStartMonth.format(cal.getTime())); // 01000000 형식으로 해당 월의 1일을 셋팅한다.
                tempYear = cal.get(Calendar.YEAR);
                tempMonth = cal.get(Calendar.MONTH);
                tempDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH);      // 해당 월의 가장 마지막 날을 구한다.
//                logger.debug("해당 월의 마지막 날 ::: " + Integer.toString(cal.getActualMaximum(Calendar.DAY_OF_MONTH)));
                cal.set(tempYear,tempMonth,tempDay);
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                break;
            case "2M":
                cal.add(Calendar.MONTH, -2); // 두달을 뺀다.
                returnDto.setStartDate(dtStartMonth.format(cal.getTime())); // 01000000 형식으로 해당 월의 1일을 셋팅한다.
                tempYear = cal.get(Calendar.YEAR);
                tempMonth = cal.get(Calendar.MONTH);
                tempDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH);      // 해당 월의 가장 마지막 날을 구한다.
                cal.set(tempYear,tempMonth,tempDay);
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                break;
            case "3M":
                cal.add(Calendar.MONTH, -3); // 세달을 뺀다.
                returnDto.setStartDate(dtStartMonth.format(cal.getTime())); // 01000000 형식으로 해당 월의 1일을 셋팅한다.
                tempYear = cal.get(Calendar.YEAR);
                tempMonth = cal.get(Calendar.MONTH);
                tempDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH);      // 해당 월의 가장 마지막 날을 구한다.
                cal.set(tempYear,tempMonth,tempDay);
                returnDto.setEndDate(dtEndFormat.format(cal.getTime()));
                break;
        }

        return returnDto;

    }
}
