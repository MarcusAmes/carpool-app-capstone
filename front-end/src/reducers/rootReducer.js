import { combineReducers } from 'redux';
import userReducer from './userReducer';
import connectionReducer from './connectionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  connection: connectionReducer
});

export default rootReducer;