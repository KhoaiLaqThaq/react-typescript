import React from 'react';
import MessageDetailContent from './message-detail-content';

export interface IMessageDetail {
  height: number
}

const HEIGHT_TOP_CONTROL = 150

function MessageDetail(props: IMessageDetail) {
  const messages = [
    {
      avatar: require('./../../../../shared/images/3.jpg'),
      name: 'Cờ Hó',
      message: 'halo u, hang out with me?',
      sent: '2020/08/26 10:44',
      isMe: false
    },
    {
      avatar: require('./../../../../shared/images/2.jpg'),
      name: 'me',
      message: '@@ OK. Why not! haha =))',
      sent: '2020/08/26 10:44',
      isMe: true
    },
    {
      avatar: require('./../../../../shared/images/3.jpg'),
      name: 'Cờ Hó',
      message: 'Or go to shopping...',
      sent: '2020/08/26 10:44',
      isMe: false
    },
    {
      avatar: require('./../../../../shared/images/2.jpg'),
      name: 'me',
      message: 'nói mẹ tiếng Việt đi cho nhanh lắm chuyện vãi l**. Đi cả ngày cũng được! Tối có đi ăn gì luôn không m?',
      sent: '2020/08/26 10:44',
      isMe: true
    },
    {
      avatar: require('./../../../../shared/images/3.jpg'),
      name: 'Cờ Hó',
      message: 'MMM like eat Lẩu or Nướng',
      sent: '2020/08/26 10:44',
      isMe: false
    },
    {
      avatar: require('./../../../../shared/images/3.jpg'),
      name: 'Cờ Hó',
      message: 'LN>>> cả 2 đ <3',
      sent: '2020/08/26 10:44',
      isMe: false
    },
  ];

  return (
    <div className={'wrap-message-content'} style={{ height: props.height - HEIGHT_TOP_CONTROL }}>
      <MessageDetailContent
        messages={messages}
      />
      <div className="message-detail-footer">

      </div>
    </div>
  );
}

export default MessageDetail;