import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
// generic components
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
// modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
// generic directives
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    ListRestoComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent,
    DynamicFormComponent,
    RegistrationFormComponent,
    DynamicFieldDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
