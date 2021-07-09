import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BbUIModule } from "bb-ui";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BbUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
