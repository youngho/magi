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

                            <sa-datatable [options]="tblOptions" filter="true" tableClass="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="username"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="password"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'10%'}"><input type="text" class="form-control" placeholder="name"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="isAccountNonExpired"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="isAccountNonLocked"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="isCredentialsNonExpired"/>
                                    </th>
                                    <th class="hasinput" [ngStyle]="{width:'17%'}"><input type="text" class="form-control" placeholder="isEnabled"/>
                                    </th>
                                </tr>
                                <tr>
                                    <!--<th [style.width]="'8%'" data-hide="mobile-p">Date</th>-->
                                    <th>USERNAME</th>
                                    <th data-class="expand">password</th>
                                    <th>name</th>
                                    <th>isAccountNonExpired</th>
                                    <th>isAccountNonLocked</th>
                                    <th>isCredentialsNonExpired</th>
                                    <th>isEnabled</th>
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