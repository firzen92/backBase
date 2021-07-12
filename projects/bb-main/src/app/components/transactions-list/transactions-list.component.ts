import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
  filteredTransactions: Transaction[];
  transactionsSub: Subscription;

  constructor(private transactionService: TransactionService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.transactionsSub = this.transactionService
      .getTransactions()
      .subscribe(
        (transList: Transaction[]) => {
          this.transactions = [...transList];
          this.filteredTransactions = [...transList];
        });

    this.transactionService.transactionsModified$.subscribe(() => {
      this.transactions = this.transactionService.transactionsList;
      this.filteredTransactions = this.transactionService.transactionsList;
    });
    
  }

  onInpChange(searchValue: string) {
    this.filteredTransactions = this.transactions.filter(item => {
      return (item.merchant.name.toLowerCase().includes(searchValue.toLowerCase()) || searchValue == "");
    });
  }

  ngOnDestroy() {
    this.transactionsSub.unsubscribe();
  }

}
