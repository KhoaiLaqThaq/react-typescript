import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

function MessageControlBottom(props) {
  return (
    <div className="wrap-message-footer">
      <div className="message-footer-input">
        <TextArea rows={2}/>
      </div>
      <div className="message-footer-action">
        
      </div>
    </div>
  );
}

export default MessageControlBottom;