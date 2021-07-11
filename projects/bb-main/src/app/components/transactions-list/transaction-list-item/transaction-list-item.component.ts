import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../../models/transaction.model';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {

  @Input() details: Transaction;
  
  constructor() { }

  ngOnInit(): void {
  }

}
