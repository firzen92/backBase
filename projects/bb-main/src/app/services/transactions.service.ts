import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction.model";
import { map, tap } from 'rxjs/operators';

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
                .get<Transaction[]>('https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions')
                .pipe(
                    map((results: any) => {
                        results.forEach(item => {
                            if(item.dates.valueDate.toString().includes('-')) {
                                item.dates.valueDate = new Date(item.dates.valueDate).getTime();
                            }
                        })
                        return results;
                    }),
                    tap((results: Transaction[]) => {
                        results = results.sort((a, b) => {
                            return b.dates.valueDate - a.dates.valueDate;
                        })
                    })
                )
        }

    }

}