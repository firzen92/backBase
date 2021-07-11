export interface Transaction {
    id: string;
    merchant: {
        name: string;
        accountNumber: string;
    }
    dates: {
        valueDate: string;
    }
    categoryCode: string;
    transaction: {
        type: string;
        creditDebitIndicator: string;
        amountCurrency: {
            currencyCode: string;
            amount: string;
        }
    }

}