/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "BinDescriptionDataTableHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
                    <header>
                        <span class="widget-icon"> <i class="fa fa-table"></i> </span>
                        <h2>Bin Description Retrieve Result</h2>
                    </header>
                    <div>
                        <div class="widget-body no-padding">
                            <sa-datatable [options]="tblOptions" filter="true" tableClass="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th class="hasinput" [ngStyle]="{width:'40%'}"><input type="text" class="form-control" placeholder="Filter ITEM NAME"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'20%'}"><input type="text" class="form-control" placeholder="Filter MAIN BIN"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'20%'}"><input type="text" class="form-control" placeholder="Filter SUB BIN"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'20%'}"><input type="text" class="form-control" placeholder="Filter NG BIN"/>
                                    </th>
                                </tr>
                                <tr>
                                    <!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
                                    <th>TEST ITEM NAME</th>
                                    <th data-class="expand">MAIN BIN</th>
                                    <th>SUB BIN</th>
                                    <th>NG BIN</th>
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