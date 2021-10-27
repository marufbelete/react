import { AuthStateToggleAction } from '../actions/authStatePage';
import { ActionTypes } from '../action-types';

interface State {
    isSignUp : boolean,
}

const initialState  = {
    isSignUp : true
}


const authPageStateReducer = (state : State = initialState , action : AuthStateToggleAction) : State => {    
    switch(action.type){

        case ActionTypes.AUTH_PAGE_STATE_TOGGLE:
            return { 
                isSignUp : !(state.isSignUp) , 
            }

        default : 
            return state;
    }

}; 

export default authPageStateReducer;