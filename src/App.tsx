import React, { useRef } from 'react';
import {
    Layout,
    Menu,
    Breadcrumb
} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Modal from './shared/commons/Modals/Modal';
import Button from './shared/commons/Buttons/Button';
import { BUTTON_TYPE, BUTTON_SIZES } from './shared/commons/constant';
import useEventListener from './shared/utils/use-event-listener';
import Header from "./modules/common/header-component";
import SideComponent from './modules/common/side-component';
import useWindowDimensions from './shared/utils/use-window-dimentions';
// import SwitchComponent from "./modules/components/SwitchComponent";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export const App = () => {
    const modalRef = useRef(null);
    const {width, height} = useWindowDimensions();

    const openModal = () => {
        modalRef.current.openModal();
    };

    const onCloseModal = () => {
        modalRef.current.close();
    }

    // listener event key down 27 (esc) to close modal
    const onCloseListenEscKey = (e) => {
        if (e.keyCode === 27 && modalRef && modalRef.current) {
            onCloseModal();
        }
    }

    const submit = (e) => {
        console.log(e);
        e.preventdefault();
    }

    useEventListener('keydown', onCloseListenEscKey);

    return (
        <Layout>
            <Header/>
            <Layout>
                <SideComponent heightDimentions={height}/>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            backgroundColor: '#fff'
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
            

            {/* <Button 
                btnContext={"Open Modal"} 
                handleClick={openModal} 
                typeClass={BUTTON_TYPE.PRIMARY}
                class={BUTTON_SIZES.SMALL}
            />
            <Modal ref={modalRef}>
                <div className="modal-title">Modal Header</div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <Button typeClass={BUTTON_TYPE.PRIMARY} btnContext={'Submit'} handleClick={submit} />
                        <Button typeClass={BUTTON_TYPE.DANGER} btnContext={"Cancel"} handleClick={onCloseModal} />
                    </form>
                </div>
            </Modal> */}
        </Layout>
    );
}

export default App;
