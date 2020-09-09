import React from 'react';
import { Breadcrumb } from 'antd';

export interface IBreadcrumbComponent {
    breadcrumbItems: any,
    handleBreadcrumbs: any
}

function BreadcrumbComponent(props: IBreadcrumbComponent) {
    
    const onActionAddBreadcrumb = (key) => {
        const itemBreadcrumb = [];
        for (let i = 0; i < props.breadcrumbItems.length; i++) {
            if (i <= key) itemBreadcrumb.push(props.breadcrumbItems[i]);
            else break;
        }
        props.handleBreadcrumbs(itemBreadcrumb);
    }
    
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {props.breadcrumbItems && props.breadcrumbItems.map((item, key) => (
                <Breadcrumb.Item key={key} onClick={() => onActionAddBreadcrumb(key)}>
                    <div>{item}</div>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;