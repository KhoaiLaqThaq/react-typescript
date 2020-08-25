import React, { useRef } from 'react';
import { Layout } from 'antd';
import { Chart } from 'react-charts';

import Button from '../../../shared/commons/Buttons/Button';
import { BUTTON_SIZES, BUTTON_TYPE } from '../../../shared/commons/constant';
import Modal from '../../../shared/commons/Modals/Modal';
import DashboardChart from './dashboard-chart';

const { Content } = Layout;

function DashboardListComponent(props) {

    const modalRef = useRef(null);

    const onOpenModal = () => {
        modalRef.current.openModal();
    }

    const onCloseModal = () => {
        modalRef.current.close();
    }

    return (
        <Content className="site-layout-background style-layout-content">
            <div className={'wrap-content-header'}>
                <Button class={'float-right'} btnContext={'Click me'} size={BUTTON_SIZES.SMALL} typeClass={BUTTON_TYPE.SECONDARY} handleClick={onOpenModal} />
            </div>
            <DashboardChart />
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

export default DashboardListComponent;