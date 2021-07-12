import { Transaction } from "../models/transaction.model";

export const TRANSACTION_DEFAULT: Transaction = {
    "categoryCode": "#12a580",
    "dates": {
        "valueDate": 1600493600000
    },
    "transaction": {
        "amountCurrency": {
            "amount": 5000,
            "currencyCode": "EUR"
        },
        "type": "Online Transfer",
        "creditDebitIndicator": "DBIT"
    },
    "merchant": {
        "name": "Backbase",
        "accountNumber": "SI64397745065188826"
    }
}