import React from 'react';
import { Image } from 'antd';
import MessageDetailItem from './message-detail-item';

export interface IMessageDetailContent {
  messages: any
}

function MessageDetailContent(props: IMessageDetailContent) {
  return (
    <div className="message-detail-content">
      { 
        props.messages && props.messages.map(
          (item, key) => <MessageDetailItem item={item} key={key} />
        )
      }
    </div>
  );
}

export default MessageDetailContent;