import {Component, OnInit} from "@angular/core";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {DashboardService} from "./dashboard.service";

declare let d3: any;
export const colors = {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"
};

export const barChartDemoOptions = {
    colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};

@FadeInTop()
@Component({
    selector: 'DashboardComponent',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    constructor(private service: DashboardService) {
    }

    errorMessage = null;
    options;
    data;
    options2;
    data2;
    optionPie;
    dataPie;
    //yieldData = [];
    public flotData: any;
    public flotExamples: any;

    ngOnInit() {

        this.flotExamples = barChartDemoOptions;
        this.flotData = {
            "barChartData": [
                {
                    "data": [
                        [
                            0,
                            10
                        ],
                        [
                            1,
                            23
                        ],
                        [
                            2,
                            19
                        ],
                        [
                            3,
                            28
                        ],
                        [
                            4,
                            25
                        ],
                        [
                            5,
                            29
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            7,
                            23
                        ],
                        [
                            8,
                            15
                        ],
                        [
                            9,
                            3
                        ],
                        [
                            10,
                            17
                        ],
                        [
                            11,
                            13
                        ]
                    ],
                    "bars": {
                        "show": true,
                        "barWidth": 0.2,
                        "order": 1
                    }
                },
                {
                    "data": [
                        [
                            0,
                            2
                        ],
                        [
                            1,
                            0
                        ],
                        [
                            2,
                            17
                        ],
                        [
                            3,
                            29
                        ],
                        [
                            4,
                            17
                        ],
                        [
                            5,
                            2
                        ],
                        [
                            6,
                            28
                        ],
                        [
                            7,
                            7
                        ],
                        [
                            8,
                            22
                        ],
                        [
                            9,
                            25
                        ],
                        [
                            10,
                            2
                        ],
                        [
                            11,
                            14
                        ]
                    ],
                    "bars": {
                        "show": true,
                        "barWidth": 0.2,
                        "order": 2
                    }
                },
                {
                    "data": [
                        [
                            0,
                            28
                        ],
                        [
                            1,
                            28
                        ],
                        [
                            2,
                            11
                        ],
                        [
                            3,
                            4
                        ],
                        [
                            4,
                            18
                        ],
                        [
                            5,
                            25
                        ],
                        [
                            6,
                            14
                        ],
                        [
                            7,
                            24
                        ],
                        [
                            8,
                            10
                        ],
                        [
                            9,
                            20
                        ],
                        [
                            10,
                            27
                        ],
                        [
                            11,
                            18
                        ]
                    ],
                    "bars": {
                        "show": true,
                        "barWidth": 0.2,
                        "order": 3
                    }
                }
            ]
        }
        this.optionPie = {
            chart: {
                type: 'pieChart',
                height: 250,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        }
        this.dataPie = [
            {
                key: "emcp",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
        ];

        this.options = {
            chart: {
                type: 'scatterChart',
                height: 350,
                color: d3.scale.category10().range(),
                "yDomain": [0, 100],
                scatter: {
                    onlyCircles: false
                },
                showDistX: false,
                showDistY: true,
                duration: 500,
                // useInteractiveGuideline: true,              //하단 그래프와 동일선상 데이터 표시
                // showValues: true,
                /*
                 valueFormat: function(d){
                 return d3.format(',')(d);       //Value 표시 형태 (숫자타입)
                 },
                 */
                xAxis: {
                    axisLabel: 'Days',
                    // rotateLabels: -45,
                    tickFormat: function (d) {
                        // return d3.time.format('%Y/%m/%d')(new Date(d)) //텍스트 표시 형태 (날짜타입)
                        // return d3.time.format('%d')(new Date(d)) //텍스트 표시 형태 (날짜타입)
                        return (d);
                    }
                },
                yAxis: {
                    axisLabel: 'Yield',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -5,

                }

            }
        }
        // this.data = this.generateDataScatter(1, 5);
        this.data = [{
            kye: "Group0",
            values: [{"x": "01", "y": "83.89"}, {"x": "02", "y": "69.87"}, {"x": "03", "y": "67.96"}, {"x": "04", "y": "98.6"}, {"x": "05", "y": "83.13"}, {"x": "06", "y": "71.55"}, {"x": "07", "y": "54.16"}, {"x": "08", "y": "67.52"}, {"x": "09", "y": "51.11"}, {"x": "10", "y": "85.48"}, {"x": "11", "y": "83.89"}, {"x": "12", "y": "99.97"}, {"x": "13", "y": "80.53"}, {"x": "14", "y": "69.45"}, {"x": "15", "y": "79.19"}, {"x": "16", "y": "68.11"}, {"x": "17", "y": "41.64","size": 1}, {
                "x": "18",
                "y": "78.65"
            }, {"x": "19", "y": "100"}, {"x": "20", "y": "70.21"}, {"x": "21", "y": "66.95"}, {"x": "21", "y": "74.6"}]
        }]

    } // ngOnInit End

    generateDataScatter(groups, points) {

        var data = [],
            shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            // shapes = ['circle'],
            random = d3.random.normal();

        this.service.retrievePost()
            .subscribe((apps) => {
                    console.log(apps);

                    for (var i = 0; i < groups; i++) {
                        data.push({
                            key: 'Group ' + i,
                            values: []
                        });

                        console.log("데이터 i : " + i);

                        // debugger;
                        for (var key in apps) {
                            data[i].values.push({
                                // x: random()
                                // x: Math.abs(random()) * 10
                                x: apps[key].date
                                // , y: Math.abs(random()) * 20
                                , y: apps[key].yield
                                , size: 4
                                // , size: Math.random()
                                // , shape: shapes[j % 6]
                            });
                        }
                    }

                    // var yieldData = {}
                    // yieldData.prototype = apps;
                    //
                    // window.__proto__.yieldData apps;

                    // var tempStr;
                    // ;
                    // if (apps != null) {
                    //     for (var key in apps) {
                    //         // var value = key;
                    //         // console.log("date===>" + apps[key].date);
                    //         // console.log("yield===>" + apps[key].yield);
                    //         // tempStr = {"title": key, "data": apps[key]};
                    //         // this.colInfo.push(tempStr);
                    //     }
                    // }
                },
                error => this.errorMessage = error);

        return data;
    }


}
