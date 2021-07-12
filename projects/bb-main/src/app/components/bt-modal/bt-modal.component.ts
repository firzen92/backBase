import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TRANSACTION_DEFAULT } from '../../mocks/transaction.mock';
import { TransactionService } from '../../services/transactions.service';

@Component({
  selector: 'app-bt-modal',
  templateUrl: './bt-modal.component.html',
  styleUrls: ['./bt-modal.component.scss']
})
export class BtModalComponent implements OnInit {

  transact = TRANSACTION_DEFAULT;

  @Input('t') toAcc: string;
  @Input('a') amt: number;

  @Output('close') close = new EventEmitter();
  
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  transferAmt() {
    this.transact.dates.valueDate = new Date().getTime();
    this.transact.merchant.name = this.toAcc;
    this.transact.transaction.amountCurrency.amount = this.amt;
    this.transactionService.addTransaction(this.transact);
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }


}
