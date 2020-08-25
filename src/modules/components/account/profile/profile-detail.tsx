import React from 'react';
import { Layout, Alert } from 'antd';

const { Content } = Layout;

function ProfileComponent(props) {
    return (
        <Content className="site-layout-background style-layout-content">
            <Alert message={'Profile'} type={'success'}/>
        </Content>
    );
}

export default ProfileComponent;