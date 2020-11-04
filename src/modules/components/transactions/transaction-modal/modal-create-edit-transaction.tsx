import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import Modal from '../../../../shared/commons/Modals/Modal';

export interface IModalCreateEditTransaction {
    isOpenPopup: boolean;
    isClosePopup: () => void;
}

export const ModalCreateEditTransaction = (props: IModalCreateEditTransaction) => {
    const popupTransactionRef = useRef(null);

    useEffect(() => {
        if (props.isOpenPopup) {
            popupTransactionRef.current.openModal();
        }
    }, [props.isOpenPopup]);

    return (
        <Modal ref={popupTransactionRef}
            allowCloseBackdrop={true} 
            allowCloseEscKey={true} 
            openFromTransaction={true} 
            resetStatusPopup={props.isClosePopup}
        >
            <div className="popup-transaction-header font-weight-bold">
                Thêm giao dịch
            </div>
            <div className="popup-transaction-body">
               <div className="row-item transaction-money">
                   <div className="transaction-icon"></div>
                   <div className="transaction-input"></div>
               </div>
               <div className="row-item">
                   <div className="transaction-icon"></div>
                   <div className="transaction-input"></div>
               </div>
               <div className="row-item">
                   <div className="transaction-icon"></div>
                   <div className="transaction-input"></div>
               </div>
               <div className="row-item">
                   <div className="transaction-icon"></div>
                   <div className="transaction-input"></div>
               </div>

               <div className="row-item">
                   <div className="transaction-icon"></div>
                   <div className="transaction-input"></div>
               </div>

               <div className="row-item">
                   <div className="transaction-icon"></div>
                   <div className="transaction-input"></div>
               </div>
               <div className="row-item">
                   <div className="transaction-icon"></div>
                   <div className="transaction-input"></div>
               </div>
            </div>
        </Modal>
    )
}

export default ModalCreateEditTransaction;