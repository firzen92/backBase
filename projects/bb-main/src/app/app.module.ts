import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BbUIModule } from 'bb-ui';

import { AppComponent } from './app.component';
import { MakeTransferComponent } from './components/make-transfer/make-transfer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BtModalComponent } from './components/bt-modal/bt-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeTransferComponent,
    BtModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BbUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
