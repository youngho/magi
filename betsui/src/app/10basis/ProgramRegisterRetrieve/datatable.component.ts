/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
                    <header>
                        <span class="widget-icon"> <i class="fa fa-table"></i> </span>
                        <h2>Program Register Retrieve Result</h2>
                    </header>
                    <div>
                        <div class="widget-body no-padding">
                            <sa-datatable [options]="tblOptions" filter="true" tableClass="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="Filter {{'date'|i18n}}"/></th>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="Filter {{'testerModel'|i18n}}"/></th>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="Filter {{'partNumber'|i18n}}"/></th>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="{{'processCode'|i18n}}"/></th>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="{{'para'|i18n}}"/></th>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="{{'mainProgramName'|i18n}}"/></th>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="Filter SBL YIELD"/></th>
                                        <th class="hasinput" ><input type="text" class="form-control" placeholder="Filter SBL YIELD"/></th>
                                    </tr>
                                    <tr>
                                        <!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
                                        <th>{{'date'|i18n}}</th>
                                        <th>{{'testerModel'|i18n}}</th>
                                        <th data-class="expand">{{'partNumber'|i18n}}</th>
                                        <th>{{'processCode'|i18n}}</th>
                                        <th>{{'mainProgramName'|i18n}}</th>
                                        <th>{{'sblYieldLimit'|i18n}}</th>
                                        <th>{{'firmwareName'|i18n}}</th>
                                        <th>{{'firmwareVersion'|i18n}}</th>
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