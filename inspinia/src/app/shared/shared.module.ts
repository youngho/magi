import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShowAuthedDirective } from './show-authed.directive';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { AppTranslateModule } from './app-translate.module';
import { Nl2brPipe } from './nl2br.pipe';
import { EmailValidatorDirective } from './email-validator.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslateModule
  ],
  declarations: [
    ShowAuthedDirective,
    NavbarComponent,
    FooterComponent,
    Nl2brPipe,
    EmailValidatorDirective
  ],
  exports: [
    ShowAuthedDirective,
    Nl2brPipe,
    EmailValidatorDirective,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslateModule
  ],
})
export class SharedModule { }
