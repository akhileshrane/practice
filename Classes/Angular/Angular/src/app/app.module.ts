import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { Component2Component } from './component2/component2.component';
import { DirectiveDirective } from './directive.directive';
import {FormsModule} from '@angular/forms'
import { FormInputComponent} from './form-input/form-input.component';
import { ReactiveFormInputComponent } from './reactive-form-input/reactive-form-input.component';
import {ReactiveFormsModule} from '@angular/forms'
import { MyServiceService} from './my-service.service'

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    Component2Component,
    DirectiveDirective,
    FormInputComponent,
    ReactiveFormInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
