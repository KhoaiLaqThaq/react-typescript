import React, {
    useMemo,
    useState,
    useEffect
} from 'react';
import {
    SmileOutlined
} from '@ant-design/icons';
import TransactionItem from './transaction-item';

export interface ITransactionList {
    transactionList: any
}

function NotFoundTransactionData() {
    return (
        <div className={'transaction-not-found'}>
            <SmileOutlined />
            <div className={'message-notify'}>
                <div>Không có giao dịch nào</div>
                <div>Nhấn <strong style={{fontSize: 20}}>+</strong> để thêm</div>
            </div>
        </div>
    )
}

export const TransactionList = (props: ITransactionList) => {

    return (
        <div className={'transaction-list'}>
            {props.transactionList ? <TransactionItem/> : <NotFoundTransactionData/>}
        </div>
    )
}

export default TransactionList;