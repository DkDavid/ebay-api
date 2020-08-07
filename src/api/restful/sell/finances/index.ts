import Api from '../../';

export interface IRangeValue {
    end: string;
    exclusiveEnd: boolean;
    exclusiveStart: boolean;
    start: string;
}

export interface IFilterField {
    field: string;
    negated: boolean;
    range: IRangeValue;
    set: string[];
    value: string[];
}

export interface ISortField {
    ascending: boolean;
    field: string;
}

export interface ITransactionParams {
    limit?: number;
    offset?: number;
    filter?: IFilterField;
    sort?: ISortField;
}

export interface ITransactionSummaryParams {
    filter?: IFilterField;
}

export default class Finances extends Api {
    get basePath(): string {
        return '/sell/finances/v1';
    }

    public getTransactions(params?: ITransactionParams) {
        return this.get(`/transaction`, {
            params
        });
    }

    public getTransactionSummary(filter: string) {
        return this.get(`/transaction_summary`, {
            params: {
                filter
            }
        });
    }
}
