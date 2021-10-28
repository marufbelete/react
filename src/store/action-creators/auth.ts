import { Dispatch } from 'react';
import  { AuthActionTypes }  from '../action-types/authTypes';

export const signUp = (email : string, password : string) => {
    return async (dispatch : Dispatch<any>) => {

        dispatch( signUpLoading() )

        try {
            const data = await getDummyToken();
            dispatch( signUpSuccess(data) )
        } 
        catch (error : any) {
            dispatch( signUpError(error.message) );
        }
    }
}


const getDummyToken = async () => {
    return "dad"
}

const getErrorDummyToken = async () => {
    throw new Error("Failed Auth");
}

export const signUpSuccess = (token : string) => {
    return {
        type : AuthActionTypes.SIGN_UP_SUCCESS,
        payload : token 
    }
}

export const signUpLoading = () => {
    return {
        type : AuthActionTypes.SIGN_UP_LOADING
    }
}

export const signUpError = (error : string) => {
    return {
        type : AuthActionTypes.SIGN_UP_SUCCESS,
        payload : error
    }
}

export const signIn = (email: string, password: string) => {
    return async (dispatch: Dispatch<any>) => {

        dispatch( signInLoading() );

        try {
            const token = await getErrorDummyToken();
            dispatch( signInSuccess(token) )
        }
        catch (error: any) {
            dispatch( signInError(error.message) );
        }
    }
}

export const signInSuccess = (token : string) => {
    return {
        type : AuthActionTypes.SIGN_IN_SUCCESS,
        payload : token
    };
}

export const signInLoading = () => {
    return {
        type: AuthActionTypes.SIGN_IN_LOADING
    };
}

export const signInError = (error: string) => {
    return {
        type: AuthActionTypes.SIGN_IN_SUCCESS,
        payload: error
    };
}
