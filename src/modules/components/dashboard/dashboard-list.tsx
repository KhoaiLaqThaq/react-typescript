import React, { useRef } from 'react';
import { Layout } from 'antd';
import Button from '../../../shared/commons/Buttons/Button';
import { BUTTON_SIZES, BUTTON_TYPE } from '../../../shared/commons/constant';
import Modal from '../../../shared/commons/Modals/Modal';
import DashboardChart from './dashboard-chart';
import TransactionControlTop from '../transactions/control-top/transaction-control-top';
import TransactionList from '../transactions/transaction-list/transaction-list';
import { v4 as uuidv4 } from 'uuid';

const { Content } = Layout;

function DashboardListComponent(props) {
    const modalRef = useRef(null);

    const dateNow = new Date();

    const onOpenModal = () => {
        modalRef.current.openModal();
    }
    const onCloseModal = () => {
        modalRef.current.close();
    }

    return (
        <Content className="wrap-transaction site-layout-background style-layout-content">
            <div className={'wrap-content-header'}>
                <TransactionControlTop dateNow={dateNow}/>
            </div>
            <div className={'wrap-content-list'}>
                <TransactionList transactionList={props.data}/>
            </div>
            <Modal ref={modalRef} allowCloseEscKey={true} allowCloseBackdrop={true}>
                <div className="modal-title">Modal title</div>
                <div className="modal-body">
                    
                </div>
                <div className="modal-footer float-right">
                    <Button typeClass={BUTTON_TYPE.PRIMARY} btnContext={'Submit'} />
                    <Button typeClass={BUTTON_TYPE.DANGER} btnContext={"Cancel"} handleClick={onCloseModal} />
                </div>
            </Modal>
        </Content>
    );
}

DashboardListComponent.defaultProps = {
    data: null
}

export default DashboardListComponent;