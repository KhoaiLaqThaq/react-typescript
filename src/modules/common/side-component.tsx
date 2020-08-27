import React from 'react';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined
} from '@ant-design/icons';
import {
    Layout,
    Menu,
    Breadcrumb
} from 'antd';
import { HEIGHT_HEADER } from '../../shared/commons/constant';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface ISideComponent {
    heightDimentions: number
}


const SideComponent = (props: ISideComponent) => {

    return (
        <Sider width={200} className="site-layout-background" style={{ height: props.heightDimentions - HEIGHT_HEADER}}>
            <Menu
                mode={'inline'}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0}}
            >
                <SubMenu key={'sub1'} icon={<UserOutlined/>} title={'Subnav1'}>
                    <Menu.Item key={'1'}>option 1</Menu.Item>
                    <Menu.Item key={'2'}>option 2</Menu.Item>
                    <Menu.Item key={'3'}>option 3</Menu.Item>
                    <Menu.Item key={'4'}>option 4</Menu.Item>
                </SubMenu>
                <SubMenu key={'sub2'} icon={<LaptopOutlined/>} title={'Subnav2'}>
                    <Menu.Item key={'5'}>option 1</Menu.Item>
                    <Menu.Item key={'6'}>option 2</Menu.Item>
                    <Menu.Item key={'7'}>option 3</Menu.Item>
                    <Menu.Item key={'8'}>option 4</Menu.Item>
                </SubMenu>
                <SubMenu key={'sub3'} icon={<NotificationOutlined/>} title={'Subnav3'}>
                    <Menu.Item key={'9'}>option 1</Menu.Item>
                    <Menu.Item key={'10'}>option 2</Menu.Item>
                    <Menu.Item key={'11'}>option 3</Menu.Item>
                    <Menu.Item key={'12'}>option 4</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default SideComponent;