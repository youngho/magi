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

			<sa-datatable [options]="tblOptions" filter="true" paginationLength="true" tableClass="table table-striped table-bordered table-hover">
				<thead>
                    <tr>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Filter {{'partnumber'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Filter {{'operaterId'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Filter {{'lotId'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'lotInTime'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'endTime'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Process Code"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'testerModel'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'testerNumber'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'head'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Test Counter"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'handlerModel'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'boardId'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'mainProgramName'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'sblResult'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'quantity'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="Input"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="PASS"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="{{'yield'|i18n}}"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN1"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN2"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN3"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN4"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN5"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN6"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN7"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN8"/></th>
                        <th class="hasinput"><input type="text" class="form-control" placeholder="BIN9"/></th>
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
						<th>{{'boardId'|i18n}}</th>
						<th>{{'mainProgramName'|i18n}}</th>
						<th>{{'sblResult'|i18n}}</th>
						<th>{{'sblYieldResult'|i18n}}</th>
                        <th>{{'sblBin1Result'|i18n}}</th>
                        <th>{{'sblBin2Result'|i18n}}</th>
                        <th>{{'sblBin3Result'|i18n}}</th>
                        <th>{{'sblBin4Result'|i18n}}</th>
                        <th>{{'sblBin5Result'|i18n}}</th>
                        <th>{{'sblBin6Result'|i18n}}</th>
                        <th>{{'sblBin7Result'|i18n}}</th>
                        <th>{{'sblBin8Result'|i18n}}</th>
                        <th>{{'sblBin9Result'|i18n}}</th>
						<th>{{'quantity'|i18n}}</th>
						<th >Input</th><!--INPUT: BIN1에서 BIN9까지 합산값-->
						<th>PASS</th><!--PASS:BIN1에서 BIN4까지 합산값(Test Program Register에 따라 변경될수 있음-->
						<th>{{'yield'|i18n}}</th> <!--PASS나누기 INPUT 소수점 2자리까지 표현-->
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