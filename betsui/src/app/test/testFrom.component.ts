/**
 * Created by cho007 on 2017-03-24.
 */
import {Component, Input, OnChanges} from "@angular/core";
@Component({
    selector:'testFrom',
    template:`
        <div>{{name}}</div>
`,
})
export class TestFromComponent  implements OnChanges {
    @Input()
    name="";

    ngOnChanges(changes: any) {
        // debugger;
        // console.log(changes.myInput.currentValue);
    }

}
