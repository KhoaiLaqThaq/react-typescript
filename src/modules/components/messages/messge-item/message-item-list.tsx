import React, { useState } from 'react';
import { Image } from 'antd';
import MessageItem from './message-item';

export interface IMessageItemList {
    data: any
}

function MessageItemList(props: IMessageItemList) {
  const [messageActive, setMessageActive] = useState(null);
  
  const handleSetActiveMessage = (messageId: any) => {
    if (messageId) {
      setMessageActive(messageId);
    }
  }

  return (
    <div className={'wrap-message-list'}>
      { props.data && props.data.map((item, key) => (
        <MessageItem
          messageActive={messageActive}
          item={item}
          key={key}
          handleSetActiveMessage={handleSetActiveMessage}
        />
      ))
      }
    </div>
  );
}

export default MessageItemList;