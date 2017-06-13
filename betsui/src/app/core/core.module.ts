import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonApiService } from './api/json-api.service'
import { LayoutService } from '../shared/layout/layout.service'
import { UserService } from '../shared/user/user.service'
// import { VoiceControlService } from '../shared/voice-control/voice-control.service'
// import {SoundService} from "../shared/sound/sound.service";



import { throwIfAlreadyLoaded } from './guards/module-import-guard';
// import {VoiceRecognitionService} from "../shared/voice-control/voice-recognition.service";
import {TabsModule, ProgressbarModule, TooltipModule, BsDropdownModule, AlertModule} from "ngx-bootstrap";

import {ApiService} from "./api.service";

@NgModule({
  imports: [
    CommonModule,


    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
  ],
  declarations: [],
  providers: [
    JsonApiService,
    LayoutService,
    UserService,
    // VoiceControlService,
    // VoiceRecognitionService,
    // SoundService,

    ApiService

  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
