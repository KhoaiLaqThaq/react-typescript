import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import MessageDetailItem from './message-detail-item';

export interface IMessageDetailContent extends StateProps {
  messageList: any,
  height: number
}

function MessageDetailContent(props: IMessageDetailContent) {
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
    <div className="message-detail-content" style={{ height: height}}>
      { 
        props.messageList && props.messageList.map(
          (item, key) => <MessageDetailItem item={item} key={key} themeMessage={themeMessage} />
        )
      }
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