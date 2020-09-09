import React, { useState } from 'react';
import {
    Layout,
} from 'antd';
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import './App.css';
import Header from "./modules/common/header-component";
// import SideComponent from './modules/common/side-component';
import useWindowDimensions from './shared/utils/use-window-dimentions';
import BreadcrumbComponent from './modules/common/breadcrumb-component';
import DashboardListComponent from './modules/components/dashboard/dashboard-list';
import ProfileComponent from './modules/components/account/profile/profile-detail';
import MessageList from './modules/components/messages/message-list/message-list';
import { HEIGHT_HEADER } from './shared/commons/constant';
// import SwitchComponent from "./modules/components/SwitchComponent";

export const App = () => {
    const {width, height} = useWindowDimensions();
    const [breadcrumbs, setBreadcrumbs] = useState(['Home']);

    return (
        <Router>
            <Layout>
                <Header/>
                <Layout style={{height: height - HEIGHT_HEADER}}>
                    {/* <SideComponent heightDimentions={height}/> */}
                    <Switch>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Route path={'/'} exact>
                                {/* <BreadcrumbComponent breadcrumbItems={breadcrumbs} handleBreadcrumbs={setBreadcrumbs}/> */}
                                <DashboardListComponent/>
                            </Route>
                            <Route path={'/profile'}>
                                <BreadcrumbComponent breadcrumbItems={breadcrumbs} handleBreadcrumbs={setBreadcrumbs}/>
                                <ProfileComponent/>
                            </Route>
                            <Route path={'/messages'}>
                                <BreadcrumbComponent breadcrumbItems={breadcrumbs} handleBreadcrumbs={setBreadcrumbs}/>
                                <MessageList height={height}/>
                            </Route>
                        </Layout>
                    </Switch>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
