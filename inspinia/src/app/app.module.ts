import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {MainViewModule} from "./views/main-view/main-view.module";
import {lastTableViewModule} from "./views/lastTable-view/lastTable-view.module"
import {MinorViewModule} from "./views/minor-view/minor-view.module";
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";
import {AuthorityViewModule} from "./views/com/authority-view.module";

// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";


import { Ng2BootstrapModule } from 'ng2-bootstrap';


import { AppRoutingModule } from './app-routing.module';


import { APP_CONFIG, DEFAULT_APP_CONFIG } from './app.config';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,

    // Views
    MainViewModule,
    lastTableViewModule,
    AuthorityViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,

    // Modules
    LayoutsModule,


    FormsModule,

    //3rd party modules
    Ng2BootstrapModule,

    //app modules
    CoreModule,
    SharedModule,
    AppRoutingModule,

    HomeModule,
    AboutModule,

    RouterModule.forRoot(ROUTES)
  ],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [{provide: APP_CONFIG, useClass: HashLocationStrategy, useValue: DEFAULT_APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
