import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {UiDatePickerComponent} from "./UiDatePicker.component"
import {MyDatePickerModule} from 'mydatepicker'

@NgModule({
  imports: [
    CommonModule, MyDatePickerModule,
  ],
  declarations: [UiDatePickerComponent],
  exports: [UiDatePickerComponent],
})
export class UiDatePickerModule { }
