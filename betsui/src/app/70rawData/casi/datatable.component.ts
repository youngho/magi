/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
	<header>
		<span class="widget-icon"> <i class="fa fa-table"></i> </span>
		<h2>CASI Raw Data Retrieve Result</h2>
	</header>
	<div>
		<div class="widget-body no-padding">

			<sa-datatable [options]="tblOptions" filter="true" paginationLength="true" tableClass="table table-striped table-bordered table-hover">
<!--				<thead>
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
-->
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