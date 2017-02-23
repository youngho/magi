

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {SmartadminInputModule} from "./input/smartadmin-input.module";
import {SmartadminValidationModule} from "./validation/smartadmin-validation.module";
import {DropzoneModule} from "./dropzone/dropzone.module";
import {SmartadminWizardsModule} from "./wizards/smartadmin-wizards.module";
import {UiDatePickerModule} from "./UiDatePicker/UiDatePicker.module";

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
  ],
  exports: [
    UiDatePickerModule,
    SmartadminInputModule,

    SmartadminValidationModule,

    DropzoneModule,
    SmartadminWizardsModule,
  ]

})
export class SmartadminFormsModule{}
