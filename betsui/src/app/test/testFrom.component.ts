/**
 * Created by cho007 on 2017-03-24.
 */
import {Component, Input, OnChanges, ContentChild, TemplateRef, ViewContainerRef} from "@angular/core";
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcCore from 'wijmo/wijmo';
@Component({
    selector:'testFrom',
    template : `

                            <wj-flex-chart
                                           class="chart"
                                           (selectionChanged)="testFuntion()"
                                           style="display:block;height:200px;"
                                           [chartType]="'Column'"
                                           [itemsSource]="itemsSource"
                                           [bindingX]="'mon'">
                                <wj-flex-chart-axis [wjProperty]="'axisX'" [title]="'title'" [labelAngle]="0"></wj-flex-chart-axis>
                                <wj-flex-chart-axis [wjProperty]="'axisY'"
                                                    [title]="'temperature, C'"
                                                    [min]="0"
                                                    [max]="100">
                                </wj-flex-chart-axis>
                                <wj-flex-chart-series [name]="'total'" [binding]="'tav'">
                                    <wj-flex-chart-axis [wjProperty]="'axisY'"
                                                        [position]="'Right'"
                                                        [title]="'precipitation, mm'"
                                                        [min]="0"
                                                        [max]="100000">
                                    </wj-flex-chart-axis>
                                </wj-flex-chart-series>
                                <wj-flex-chart-series [name]="'prec'" [chartType]="'LineSymbols'"
                                                      [binding]="'prec'"></wj-flex-chart-series>
                            </wj-flex-chart>

    `
})
export class TestFromComponent  implements OnChanges {
    @Input()
    name="";
    itemsSource: any[];
    constructor() {
        this.itemsSource = [
            {mon: '-3岿', tav: 3.1, tmin: 0.6, tmax: 5.6, prec: 78.7},
            {mon: '-2岿', tav: 3.2, tmin: 0.3, tmax: 6.2, prec: 52.0},
            {mon: '-1岿', tav: 5.7, tmin: 2.3, tmax: 9.3, prec: 73.6},
            {mon: '-3林', tav: 8.7, tmin: 4.4, tmax: 13.0, prec: 45.9},
            {mon: '-2林', tav: 12.6, tmin: 8.0, tmax: 17.0, prec: 64.8},
            {mon: '-1林', tav: 15.3, tmin: 10.8, tmax: 19.6, prec: 70.9},
            {mon: '-3老', tav: 17.2, tmin: 12.9, tmax: 21.4, prec: 70.2},
            {mon: '-2老', tav: 17.2, tmin: 12.8, tmax: 21.6, prec: 74.2},
            {mon: '寸老', tav: 14.7, tmin: 10.7, tmax: 18.6, prec: 83.4}
        ];
    }
    ngOnChanges(changes: any) {
        // debugger;
        // console.log(changes.myInput.currentValue);
    }
}
