import { Dispatch } from 'react';
import  { AuthActionTypes }  from '../action-types/authTypes';
import axios from 'axios';

export const signUp = (username : string, password : string, name: string, callBack : (token : string) => void) => {

    return async (dispatch : Dispatch<any>) => {

        dispatch( signUpLoading() )

        try {
            const response = await axios.post(
                'http://localhost:5000/register',
                { username, password, name }
            );            
            await dispatch( signUpSuccess(response.data) );
            await callBack(response.data.token);
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

export const signIn = (username: string, password: string, callBack : (token : string) => void) => {
    return async (dispatch: Dispatch<any>) => {

        dispatch( signInLoading() );

        try {
            const response = await axios.post(
                'http://localhost:5000/login',
                { username, password }
            );
            
            if(response.status >= 200 && response.status < 300){
                await dispatch( signInSuccess(response.data) );
                await callBack(response.data.token);
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
