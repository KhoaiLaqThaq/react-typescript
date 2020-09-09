import React, { useMemo, useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MessageDetailItem from './message-detail-item';

export interface IMessageDetailContent extends StateProps {
  messageList: any,
  height: number
}

function MessageDetailContent(props: IMessageDetailContent) {
  const refScroll = useRef(null);
  const flagRef = useRef(null);
  const [heightBox, setHeightBox] = useState(null);

  useEffect(() => {
    if (flagRef && flagRef.current) {
      const top = flagRef.current.getBoundingClientRect().top;
      setHeightBox(top)
    }
  }, [flagRef, props.messageList])

  useEffect(() => {
    if ( refScroll && refScroll.current ){
      console.log(refScroll.current.clientHeight);
      refScroll.current.scrollTop = heightBox;
    }
  }, [heightBox])

  const themeMessage = useMemo(() => {
    if (props.themeMessage) {
      return props.themeMessage;
    }
  }, [props.themeMessage]);

  const height = useMemo(() => {
    if (props.height) {
      return props.height - 200;
    }
  }, [props.height])

  return (
    <div className="message-detail-content" style={{ height: height}} ref={refScroll}>
      <div className="message-detail-box" style={{ height: heightBox}}>
        { 
          props.messageList && props.messageList.map(
            (item, key) => <MessageDetailItem item={item} key={key} themeMessage={themeMessage} />
          )
        }
        <div className="message-item" ref={flagRef}></div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ messageListReducer }) => ({
  messages: messageListReducer.messages,
  themeMessage: messageListReducer.themeMessage
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(
  mapStateToProps,
  null
)(MessageDetailContent);