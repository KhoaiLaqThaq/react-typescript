import React, { useMemo, useEffect, useState } from 'react';
export interface ITransactionControlTop {
    dateNow?: any
}

export const data = [
    {
        id: 5,
        code: 5,
        fullText: 'Tháng 5'
    },{
        id: 6,
        code: 6,
        fullText: 'Tháng 6'
    },{
        id: 7,
        code: 7,
        fullText: 'Tháng 7'
    },{
        id: 8,
        code: 8,
        fullText: 'Tháng 8'
    },{
        id: 9,
        code: 9,
        fullText: 'Tháng 9'
    }
];

export const TransactionControlTop = (props: ITransactionControlTop) => {
    const [monthActive, setMonthActice] = useState(null);
    
    //? get month current
    const month = useMemo(() => {
        if (props.dateNow) {
            return props.dateNow.getMonth() + 1;
        }
    }, props.dateNow);

    useEffect(() => {
        if (month) {
            setMonthActice(month);
        }
    }, [month])

    const onElementActive = (item: number) => {
        setMonthActice(item);
    }

    return (
        <div className={'transaction-header'}>
            <div className="transaction-container">
                <ul className={'menu-items'}>
                    {data.map((item, key) => (
                        <li  className={`menu-item ${item.code === monthActive ? 'active':''}`} 
                            key={key}
                            onClick={() => onElementActive(item.code)}
                        >
                            {item.fullText}
                        </li>
                    ))}
                    <li className={'menu-item'}>Tương lai</li>
                </ul>
            </div>
        </div>
    )
}

export default TransactionControlTop;