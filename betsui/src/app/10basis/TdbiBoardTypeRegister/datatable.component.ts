/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
                    <header>
                        <span class="widget-icon"> <i class="fa fa-table"></i> </span>
                        <h2>TDBI Board Type Retrieve Result</h2>
                    </header>
                    <div>
                        <div class="widget-body no-padding">

                            <sa-datatable [options]="tblOptions" filter="true" tableClass="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th class="hasinput" [ngStyle]="{width:'50%'}"><input type="text" class="form-control" placeholder="Filter Board Type No"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'25%'}"><input type="text" class="form-control" placeholder="Filter X Socket Quantity"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'25%'}"><input type="text" class="form-control" placeholder="Filter Y Socket Quantity"/>
                                    </th>
                                </tr>


                                <tr>
                                    <!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
                                    <th>Board Type No</th>
                                    <th data-class="expand">X Socket Quantity</th>
                                    <th>Filter Y Socket Quantity</th>
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