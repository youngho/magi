/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
	<header>
		<span class="widget-icon"> <i class="fa fa-table"></i> </span>
		<h2>Lot yield</h2>
	</header>
	<div>
		<div class="widget-body no-padding">

			<sa-datatable [options]="tblOptions" tableClass="table table-striped table-bordered table-hover">
				<thead>
					<tr>
						<!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
						<th>Date</th>
						<th>Part Number</th>
						<th>Lot Number</th>
						<th data-class="expand">Process Code</th>
						<th>Test Counter</th>
						<th>Tester</th>
						<th>Tester Head</th>
						<th>Category 01</th>
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