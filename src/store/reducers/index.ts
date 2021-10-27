import { combineReducers } from "redux";
import authStatePageReducer from './authPageStateReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    authPageState : authStatePageReducer,
    auth : authReducer
});

export default reducers;