import {
    Component, ViewChild, ElementRef, ViewContainerRef, AfterViewInit, ViewChildren,
    QueryList, ContentChild, TemplateRef
} from "@angular/core";
import {TestFromComponent} from "./testFrom.component";
import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjcCore from 'wijmo/wijmo';

@Component({
    selector: 'test',
    template: `
        <testFrom #test1 [name]="'test1'">Content1</testFrom>
        <testFrom #test2 [name]="'test2'">Content2</testFrom>

    `
})
export class TestComponent implements AfterViewInit {
    // @ViewChildren('test1, test2') chldren: QueryList<wjcChart.FlexChart>;    //<== 기본적으로는 ElementRef로 받아오게 된다.
    @ContentChild(('test1'), { read : ViewContainerRef  }) headerTemp: ViewContainerRef;
    // @ViewChild(('cont2'), { read : ViewContainerRef }) child2: ViewContainerRef;   //<== read를 통해 ViewContainerRef로 받아오기

    hitInfo: wjcChart.HitTestInfo;
    point: wjcCore.Point;

    ngAfterViewInit() {

        // this.chldren.toArray().forEach((c) => {
        //     debugger;
            console.log(this.headerTemp);
        //     if (c) {
        //         c.hostElement.onmouseup = (e) => {
        //             this.hitInfo = c.hitTest(e);
        //             this.point = c.pointToData(e);
        //             // this.chartElement = wjcChart.ChartElement[this.test1.chartElement];
        //             // this.chartPopup();
        //         };
        //     }
        // });
    }
}


