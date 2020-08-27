import { combineReducers } from 'redux';
import { messageListReducer } from '../../modules/components/messages/message-list.reducer';


const rootReducer = combineReducers({
    messageListReducer,
});

export default rootReducer;
