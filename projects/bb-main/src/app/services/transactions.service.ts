import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction.model";

@Injectable({ providedIn: 'root' })

export class TransactionService {
    private _transactionsList: Transaction[] = [];

    constructor(private http: HttpClient) { }

    getTransactions(): Observable<Transaction[]> {
        if (this._transactionsList.length) {
            return new Observable(observer => {
                observer.next([...this._transactionsList]);
            });
        } else {
            return this.http
                .get<Transaction[]>('https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions');
        }

    }

}