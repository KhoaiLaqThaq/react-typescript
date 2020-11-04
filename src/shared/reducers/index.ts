import { combineReducers } from 'redux';
import { messageListReducer } from '../../modules/components/messages/message-list.reducer';
import { authReducer } from './../../modules/components/account/auth.reducer';


const rootReducer = combineReducers({
    messageListReducer,
    authReducer
});

export default rootReducer;
