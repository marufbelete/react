import { AuthStateToggleAction } from '../actions/authStatePage';
import { AuthPageStateActionTypes } from '../action-types/authPageStateTypes';

interface State {
    isSignUp : boolean,
}

const initialState  = {
    isSignUp : true
}


const authPageStateReducer = (state : State = initialState , action : AuthStateToggleAction) : State => {    
    switch(action.type){

        case AuthPageStateActionTypes.AUTH_PAGE_STATE_TOGGLE:
            return { 
                isSignUp : !(state.isSignUp) , 
            }

        default : 
            return state;
    }

}; 

export default authPageStateReducer;