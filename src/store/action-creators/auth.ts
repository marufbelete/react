import { Dispatch } from 'react';
import  { AuthActionTypes }  from '../action-types/authTypes';
import axios from 'axios';

export const signUp = (email : string, password : string , callBack : () => void) => {

    return async (dispatch : Dispatch<any>) => {

        dispatch( signUpLoading() )

        try {
            const response = await axios.post(
                'http://localhost:5000/api/users',
                { email, password }
            );            
            dispatch( signUpSuccess(response.data) );
            callBack();
        } 
        catch (error : any) {
            dispatch( signUpError(error.message) );
        }
    }
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

export const signIn = (email: string, password: string, callBack : () => void) => {
    return async (dispatch: Dispatch<any>) => {

        dispatch( signInLoading() );

        try {
            const response = await axios.post(
                'http://localhost:5000/api/auth',
                { email, password }
            );
            
            if(response.status >= 200 && response.status < 300){
                dispatch( signInSuccess(response.data) );
                callBack();
            }

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


export const signOut = () => {
    return {
        type : AuthActionTypes.SIGN_OUT,
    }
}
