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
    options;
    data;
    options2;
    data2;
    optionPie;
    dataPie;

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
                scatter: {
                    onlyCircles: false
                },
                showDistX: true,
                showDistY: true,
                duration: 350,
                xAxis: {
                    axisLabel: 'Days',
                    tickFormat: function (d) {
                        // return d3.format('.02f')(d);
                        return d3.format('.')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Yield',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -5
                }
            }
        }
        this.data =
            this.generateDataScatter(1, 20);

    }

    generateDataScatter(groups, points) {
        var data = [],
            // shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
            shapes = ['circle'],
            random = d3.random.normal();

        for (var i = 0; i < groups; i++) {
            data.push({
                key: 'Group ' + i,
                values: []
            });

            for (var j = 0; j < points; j++) {
                data[i].values.push({
                    // x: random()
                    x: Math.abs(random()) * 10
                    , y: Math.abs(random()) * 20
                    , size: 4
                    // , size: Math.random()
                    , shape: shapes[j % 6]
                });
            }
        }
        return data;
    }


}
