import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BbUIModule } from 'bb-ui';

import { AppComponent } from './app.component';
import { MakeTransferComponent } from './components/make-transfer/make-transfer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BtModalComponent } from './components/bt-modal/bt-modal.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionListItemComponent } from './components/transactions-list/transaction-list-item/transaction-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeTransferComponent,
    BtModalComponent,
    TransactionsListComponent,
    TransactionListItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BbUIModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
