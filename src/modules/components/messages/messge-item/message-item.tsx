import React, { useMemo } from 'react';
import { Image } from 'antd';

export interface IMessageItem {
  messageActive: boolean,
  item: any,
  handleSetActiveMessage: (messageId: any) => void
}

function MessageItem(props) {

  const item = useMemo(() => {
      if (props.item) {
          return props.item;
      }
  }, [props.item]);
  
  const onImageAvatarNotFound = (e, item: any) => {
    e.target.onerror = null;
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', '32px');
    canvas.setAttribute('height', '32px');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#8ac891'
    ctx.fillRect(0, 0, 48, 48);
    ctx.fillStyle = `#ccc`;
    ctx.font = "28px Noto  Sans CJK JP";
    ctx.fillText(item && item.name[0], 6, 25);
    e.target.src = canvas.toDataURL('image/jpeg', 1.0);
    return true;
  }

  return (
    <div className={`message-item ${props.messageActive === item.id ? 'active':''}`} onClick={() => props.handleSetActiveMessage(item.id)}>
      <div className="message-avatar">
        <Image src={item.avatar ? item.avatar : 'null'} onError={(e) => onImageAvatarNotFound(e, item)} />
      </div>
      <div className={'message-text'}>
        <div className="title">
          {item.title}
        </div>
        <div className="last-message">
          {item.lastMessage}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;