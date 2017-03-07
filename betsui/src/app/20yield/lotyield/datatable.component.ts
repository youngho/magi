/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
	<header>
		<span class="widget-icon"> <i class="fa fa-table"></i> </span>
		<h2>Lot yield Retrieve Result</h2>
	</header>
	<div>
		<div class="widget-body no-padding">

			<sa-datatable [options]="tblOptions" filter="true" tableClass="table table-striped table-bordered table-hover">
				<thead>
                    <tr>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Filter Date"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Filter Part Number"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Filter Lot Number"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Process Code"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Test Counter"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Tester"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Head"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Board ID"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Test Qty"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Pass Qty"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Lot Yield"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN1"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN2"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN3"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN4"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN5"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN6"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN7"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN8"/></th>
                        <th class="hasinput"><input type="text" width="4" class="form-control" placeholder="BIN9"/></th>
                    </tr>
                
					<tr>
						<!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
						<th [style.width]="'8%'">{{'partnumber'|i18n}}</th>
						<th [style.width]="'16%'" data-class="expand" >{{'operaterId'|i18n}}</th>
						<th>{{'lotId'|i18n}}</th>
						<th>{{'lotInTime'|i18n}}</th>
						<th>{{'endTime'|i18n}}</th>
						<th >Process Code</th>
						<th>{{'testerModel'|i18n}}</th>
						<th>{{'testerNumber'|i18n}}</th>
						<th>{{'head'|i18n}}</th>
						<th>Test Counter</th>
						<th>{{'handlerModel'|i18n}}</th>
						<th >Boart ID</th>
						<th>{{'mainProgramName'|i18n}}</th>
						<th>{{'sblResult'|i18n}}</th>
						<th>{{'quantity'|i18n}}</th>
						<th >Input</th><!--INPUT: BIN1에서 BIN9까지 합산값-->
						<th>PASS</th><!--PASS:BIN1에서 BIN4까지 합산값(Test Program Register에 따라 변경될수 있음-->
						<th>YIELD</th>
						<th [style.width]="'1%'">BIN1</th>
						<th [style.width]="'1%'">BIN2</th>
						<th [style.width]="'1%'">BIN3</th>
						<th [style.width]="'1%'">BIN4</th>
						<th [style.width]="'1%'">BIN5</th>
						<th [style.width]="'1%'">BIN6</th>
						<th [style.width]="'1%'">BIN7</th>
						<th [style.width]="'1%'">BIN8</th>
						<th [style.width]="'1%'">BIN9</th>
					</tr>
				</thead>

<!--				<tfoot>
					<tr>
						<th>User ID</th>
						<th>Post ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</tfoot>-->
			</sa-datatable>

		</div>
	</div>
</sa-widget>
`
})

export class DatatableComponent {
    tblOptions = {};

    constructor(private injector: Injector) {
        this.tblOptions = this.injector.get('options');
        //console.log('looking for options in admin apps')
        console.log(this.tblOptions);
    }
}