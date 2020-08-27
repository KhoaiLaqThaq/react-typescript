import React from 'react';
import MessageDetailContent from './message-detail-content';
import MessageControlBottom from '../control-bottom/message-control-bottom';

export interface IMessageDetail {
  height: number
}

const HEIGHT_TOP_CONTROL = 150

function MessageDetail(props: IMessageDetail) {

  const HEIGHT_MESSGAE_CONTENT = props.height - HEIGHT_TOP_CONTROL;

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
      sent: '2020/08/26 10:45',
      isMe: true
    },
    {
      avatar: require('./../../../../shared/images/3.jpg'),
      name: 'Cờ Hó',
      message: 'Or go to shopping...',
      sent: '2020/08/26 10:47',
      isMe: false
    },
    {
      avatar: require('./../../../../shared/images/2.jpg'),
      name: 'me',
      message: 'nói mẹ tiếng Việt đi cho nhanh lắm chuyện vãi l**. Đi cả ngày cũng được! Tối có đi ăn gì luôn không m?',
      sent: '2020/08/26 10:47',
      isMe: true
    },
    {
      avatar: require('./../../../../shared/images/3.jpg'),
      name: 'Cờ Hó',
      message: 'MMM like eat Lẩu or Nướng',
      sent: '2020/08/26 10:48',
      isMe: false
    },
    {
      avatar: require('./../../../../shared/images/3.jpg'),
      name: 'Cờ Hó',
      message: 'LN>>> cả 2 đ <3',
      sent: '2020/08/26 10:50',
      isMe: false
    },
  ];

  return (
    <div className={'wrap-message-content'} style={{ height: HEIGHT_MESSGAE_CONTENT }}>
      <MessageDetailContent messageList={messages} height={HEIGHT_MESSGAE_CONTENT}/>
      <MessageControlBottom/>
    </div>
  );
}

export default MessageDetail;