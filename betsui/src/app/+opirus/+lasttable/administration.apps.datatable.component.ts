/**
 * Created by yhkim on 2017-02-20.
 */
import {Component, Injector} from '@angular/core';

@Component({
    selector: "adminAppsHtml",
    template: `<sa-datatable [options]="tblOptions" paginationLength="true" tableClass="table table-striped table-bordered table-hover"  width="100%">
            <thead>
                <tr>
                    <th>APIKey</th>
                    <th>Name</th>
                </tr>
            </thead>
        </sa-datatable>

  `
})

export class AdministrationAppsDatatableComponent {
    tblOptions = {};

    constructor(private injector: Injector) {
        this.tblOptions = this.injector.get('options');
        console.log('looking for options in admin apps')
        console.log(this.tblOptions);
    }
}