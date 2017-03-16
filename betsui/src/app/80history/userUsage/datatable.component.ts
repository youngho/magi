/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
	<header>
		<span class="widget-icon"> <i class="fa fa-table"></i> </span>
		<h2>User Usage Retrieve Result</h2>
	</header>
	<div>
		<div class="widget-body no-padding">
			<sa-datatable [options]="tblOptions" filter="true" paginationLength="true" tableClass="table table-striped table-bordered table-hover">

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