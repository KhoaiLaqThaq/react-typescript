import React, { useRef, useState } from 'react';
import { Input } from 'antd';
import {
  AudioOutlined,
  PaperClipOutlined,
  SmileOutlined,
  EllipsisOutlined,
  HeartFilled,
  MehOutlined,
  LikeFilled,
  FrownOutlined,
  StarFilled,
  SendOutlined
} from '@ant-design/icons';
import _ from 'lodash';
import useEventListener from '../../../../shared/utils/use-event-listener';
import useWindowDimensions from '../../../../shared/utils/use-window-dimentions';
import { EVENT_ENTER_CODE } from '../../../../shared/commons/constant';

const { TextArea } = Input;

const HEIGHT_CHATBOX_DEFAULT = 32;
const HEIGHT_CHAT_ENTER = 22;

function MessageControlBottom(props) {
  const chatRef = useRef(null);
  const emotionRef = useRef(null);
  const {width} = useWindowDimensions();
  const [heightChatBox, setHeightChatBox] = useState(HEIGHT_CHATBOX_DEFAULT);
  const [displayEmotions, setDisplayEmotions] = useState(false);
  const [displayIconSend, setDisplayIconSend] = useState(false);

  /**
   * Just keydown is ENTER to send message
   * A both SHIFT + ENTER to down the line
   * @param e 
   */
  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      if (e.shiftKey) {
        if ((heightChatBox + HEIGHT_CHAT_ENTER) < 100 ) {
          setHeightChatBox(heightChatBox + HEIGHT_CHAT_ENTER);
        }
      } else {
        console.log('sent message');
        e.preventDefault();
      }
    } else if (e.keyCode === 8) {
      if (chatRef && chatRef.current && chatRef.current.state.value) {
        const txtChatbox = chatRef.current.state.value;
        const countEnterKey =  _.sumBy(txtChatbox, x => x === '\n');
        if (countEnterKey < 3 && countEnterKey >= 0) {
          if (heightChatBox - HEIGHT_CHAT_ENTER >= HEIGHT_CHATBOX_DEFAULT) {
            setHeightChatBox(heightChatBox - HEIGHT_CHAT_ENTER);
          }
        }
      }
    } else if (e.keyCode === 46) {
      if (chatRef && chatRef.current && chatRef.current.state.value) {
        const txtChatbox = chatRef.current.state.value;
        const countEnterKey =  _.countBy(txtChatbox, EVENT_ENTER_CODE);
        const enterkey = _.cloneDeep(countEnterKey);
        if (enterkey.undefined <= 4 && enterkey.undefined >= 0) {
          setHeightChatBox(heightChatBox - HEIGHT_CHAT_ENTER);
        }
      }
    }
  }

  const handleChangeInput = (e) => {
    if (e.target.value && e.target.value.trim().length > 0) {
      setDisplayIconSend(true);
    } else {
      setDisplayIconSend(false);
    }
  }

  const handleDisplayEmotions = (e) => {
    if (emotionRef && emotionRef.current && !emotionRef.current.contains(e.target)) {
      setDisplayEmotions(false)
    }
  }

  useEventListener('mousedown', handleDisplayEmotions);

  return (
    <div className="wrap-message-footer">
      <div className="message-footer-left">
        <div className="message-footer-icon">
          <div className="icon" style={{ display: width <= 1200 ? 'none':'block' }}>
            <AudioOutlined />
          </div>
          <div className="icon" style={{ display: width <= 1200 ? 'none':'block' }}>
            <PaperClipOutlined />
          </div>
          <div className="icon-hide" style={{ display: width <= 1200 ? 'block':'none' }}>
            <EllipsisOutlined/>
          </div>
        </div>
        <TextArea 
          className={'message-input'} 
          rows={1} 
          placeholder={'Chat now!'}
          style={{ height: heightChatBox}}
          ref={chatRef}
          onKeyUp={handleSendMessage}
          onChange={handleChangeInput}
          
        />
        <div className="message-send-icon" style={{ display: displayIconSend ? 'block':'none' }}>
          <SendOutlined />
        </div>
      </div>
      <div className="message-footer-right">
        <SmileOutlined className={'icon-emotion'} onClick={() => setDisplayEmotions(true)} />
        <div className="message-emotion" style={{ display: displayEmotions ? 'block':'none' }} ref={emotionRef}>
          <LikeFilled className={'like'} />
          <HeartFilled className={'heart'} />
          <SmileOutlined className={'smile'} />
          <MehOutlined className={'meh'} />
          <FrownOutlined className={'frown'} />
          <StarFilled className={'star'} />
        </div>
      </div>
    </div>
  );
}

export default MessageControlBottom;