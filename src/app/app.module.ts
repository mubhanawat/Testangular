import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from "./firstcomp";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import {  } from "./counter.component";
import { HelloName } from "./helloname";
import { FormsModule } from "@angular/forms";
import { PrintNameComponent } from './print-name/print-name.component';
import { DirectivecompComponent } from './directivecomp/directivecomp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import {CounterComponent} from './coun.component'
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    HelloName,
    PrintNameComponent,
    DirectivecompComponent,
    EmpDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 // bootstrap:[FirstComponent]

})
export class AppModule { }
