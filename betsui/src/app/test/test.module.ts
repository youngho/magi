import {NgModule} from "@angular/core";
import {TestComponent} from "./test.component";
import {TestRouting} from "./test.routing";
import {TestFromComponent} from "./testFrom.component";
@NgModule({
    imports: [
        TestRouting
    ],
    declarations: [TestComponent,TestFromComponent],
    exports: [TestComponent]

})
export class TestModule {
}
