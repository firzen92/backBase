import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnDestroy {

  transactions: Transaction[];
  transactionsSub: Subscription;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionsSub = this.transactionService
      .getTransactions()
      .subscribe(
        (transList: Transaction[]) => this.transactions = transList);
  }

  ngOnDestroy() {
    this.transactionsSub.unsubscribe();
  }

}
