/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-widget [editbutton]="false" color="blueDark">
                    <header>
                        <span class="widget-icon"> <i class="fa fa-table"></i> </span>
                        <h2>User register retrieve Result</h2>
                    </header>
                    <div>
                        <div class="widget-body no-padding">

                            <sa-datatable [options]="tblOptions" filter="true" paginationLength="true" tableClass="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="{{'username'|i18n}}"/></th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="{{'password'|i18n}}"/></th>
                                    <th class="hasinput" [ngStyle]="{width:'10%'}"><input type="text" class="form-control" placeholder="{{'name'|i18n}}"/></th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="{{'isAccountNonExpired'|i18n}}"/></th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="{{'isAccountNonLocked'|i18n}}"/></th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="{{'isCredentialsNonExpired'|i18n}}"/></th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="{{'isEnabled'|i18n}}"/></th>
                                </tr>
                                <tr>
                                    <!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
                                    <th>{{'username'|i18n}}</th>
                                    <th data-class="expand">{{'password'|i18n}}</th>
                                    <th>{{'name'|i18n}}</th>
                                    <th>{{'isAccountNonExpired'|i18n}}</th>
                                    <th>{{'isAccountNonLocked'|i18n}}</th>
                                    <th>{{'isCredentialsNonExpired'|i18n}}</th>
                                    <th>{{'isEnabled'|i18n}}</th>
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