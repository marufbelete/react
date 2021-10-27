import { AuthActionTypes } from '../action-types/authTypes';

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


const authPageStateReducer = (state : State = initialState , action : any) : State => {    
    switch(action.type){

        case AuthActionTypes.SIGN_UP_SUCCESS:
            return {
                auth : action.payload,
                loading : false,
                error : null
            }

        case AuthActionTypes.SIGN_UP_LOADING:
            return {
                auth : null,
                loading : true,
                error : null
            }

        case AuthActionTypes.SIGN_UP_ERROR:
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