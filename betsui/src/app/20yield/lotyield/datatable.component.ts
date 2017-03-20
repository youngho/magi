/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector, ViewChild, Inject} from '@angular/core';
import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wjcGridXlsx from 'wijmo/wijmo.grid.xlsx';
import * as wjcGridFilter from 'wijmo/wijmo.grid.filter';


@Component({
    selector: "adminAppsHtml",
    template: `
<sa-widget [editbutton]="false" color="blueDark">
	<header>
		<span class="widget-icon"> <i class="fa fa-table"></i> </span>
		<h2>Lot yield Retrieve Result</h2>
	</header>
	<div class="col-md-6 col-xs-12">
        <div class="form-inline well well-lg">
            <button class="btn btn-default" (click)="exportExcelAsync()">Export</button>
            <div class="checkbox">
                <label>
                    <input type="checkbox" [(ngModel)]="includeColumnHeader"> Include Column Header
                </label>
            </div>
        </div>
    </div>
	<div>
		<div class="widget-body no-padding">
            <wj-flex-grid  #flexGrid  [itemsSource]="data">
                <wj-flex-grid-filter #filter></wj-flex-grid-filter>
                <wj-flex-grid-column *ngFor="let col of colInfo" [header]=col [binding]=col></wj-flex-grid-column>
            </wj-flex-grid>
		</div>
	</div>
</sa-widget>

`
})

export class DatatableComponent {
    tblOptions = {};
    data: wjcCore.CollectionView;
    private colInfo = new Array();

    // @ViewChild('filter') filter: wjcGridFilter.FlexGridFilter;
    @ViewChild('flexGrid') flexGrid: wjcGrid.FlexGrid;
    includeColumnHeader = true;

    constructor(private injector: Injector) {
        debugger;

        this.tblOptions = this.injector.get('options');
        this.data = new wjcCore.CollectionView(this.tblOptions);
        let apps_obj = this.tblOptions[0];
        if (apps_obj != null) {
            for (let key in apps_obj) {
                this.colInfo.push(key);
            }
        }
        console.log(this.tblOptions);
    }

    exportExcelAsync() {
        wjcGridXlsx.FlexGridXlsxConverter.saveAsync(this.flexGrid, { includeColumnHeaders: this.includeColumnHeader, includeCellStyles: false }, 'FlexGrid.xlsx');
    }
}