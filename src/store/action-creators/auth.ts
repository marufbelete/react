import { Dispatch } from 'react';
import  { AuthActionTypes }  from '../action-types/authTypes';

export const signUp = (email : string, password : string) => {
    return async (dispatch : Dispatch<any>) => {

        dispatch({
            type : AuthActionTypes.SIGN_UP_LOADING
        })

        try {
            
            const data = await getDummyToken();
            dispatch(
                signUpSuccess(data)
            )
        } 
        catch (error : any) {
            dispatch(
                signUpError(error)
            );
        }
    }
}


const getDummyToken = async () => {
    throw new Error("Failed Sign Up")
    return "dad"
}

export const signUpSuccess = (token : string) => {
    return {
        type : AuthActionTypes.SIGN_UP_SUCCESS,
        payload : token 
    }
}

export const signUpError = (error : Error) => {
    return {
        type : AuthActionTypes.SIGN_UP_SUCCESS,
        payload : error.message
    }
}

