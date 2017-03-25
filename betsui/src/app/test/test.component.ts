/**
 * Created by cho007 on 2017-03-24.
 */
import {Component, Input} from "@angular/core";
@Component({
    selector:'test',
    template:`
        <testFrom [name]="name">{{name}}</testFrom>
`,
})
export class TestComponent{
    name: String="test";
}
