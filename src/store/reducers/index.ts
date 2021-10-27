import { combineReducers } from "redux";
import authStatePageReducer from './authPageStateReducer';

const reducers = combineReducers({
    authPageState : authStatePageReducer
});

export default reducers;