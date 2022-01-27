import { combineReducers } from "redux";
import authStatePageReducer from './authPageStateReducer';
import authReducer from './authReducer';
import postsReducer from './postsReducer';

const reducers = combineReducers({
    authPageState : authStatePageReducer,
    auth : authReducer,
    posts: postsReducer
});

export default reducers;