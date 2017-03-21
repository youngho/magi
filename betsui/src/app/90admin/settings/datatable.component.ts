/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
                    <header>
                        <span class="widget-icon"> <i class="fa fa-table"></i> </span>
                        <h2>BETS Settings Retrieve Result</h2>
                    </header>
                    <div>
                        <div class="widget-body no-padding">

                            <sa-datatable [options]="tblOptions" filter="true" paginationLength="true" tableClass="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th class="hasinput"><input type="text" class="form-control" placeholder="Filter {{'betsKey'|i18n}}"/></th>
                                    <th class="hasinput"><input type="text" class="form-control" placeholder="Filter {{'betsValue'|i18n}}"/></th>
                                    <th class="hasinput"><input type="text" class="form-control" placeholder="Filter {{'betsKeyDesc'|i18n}}"/></th>
                                    <th class="hasinput"><input type="text" class="form-control" placeholder="Filter {{'settingUser'|i18n}}"/></th>
                                </tr>
                                <tr>
                                    <!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
                                    <th>{{'betsKey'|i18n}}</th>
                                    <th data-class="expand">{{'betsValue'|i18n}}</th>
                                    <th data-class="expand">{{'betsKeyDesc'|i18n}}</th>
                                    <th data-class="expand">{{'settingUser'|i18n}}</th>
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