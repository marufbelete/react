import { AuthActionTypes } from '../action-types/authTypes';
import { Action } from '../actions/authState';

interface State {
    auth : string | null,
    loading : boolean,
    error : string | null
}

const initialState  = {
    auth : null,
    loading : false,
    error : null
}


const authPageStateReducer = (state : State = initialState , action : Action) : State => {  
    
    switch(action.type){

        case AuthActionTypes.SIGN_UP_SUCCESS:
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return {
                auth : action.payload,
                loading : false,
                error : null
            }

        case AuthActionTypes.SIGN_UP_LOADING:
        case AuthActionTypes.SIGN_IN_LOADING:
            return {
                auth : null,
                loading : true,
                error : null
            }

        case AuthActionTypes.SIGN_UP_ERROR:
        case AuthActionTypes.SIGN_IN_ERROR:
            return {
                auth : null,
                loading : false,
                error : action.payload
            }
        
        default : 
            return state;
    }

}; 

export default authPageStateReducer;