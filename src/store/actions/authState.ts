import { AuthActionTypes } from '../action-types/authTypes';

export interface AuthSignUpLoading {
  type: AuthActionTypes.SIGN_UP_LOADING;
}

export interface AuthSignUpSuccess {
    type : AuthActionTypes.SIGN_UP_SUCCESS,
    payload : string;
}

export interface AuthSignUpFailure {
    type : AuthActionTypes.SIGN_UP_ERROR,
    payload : string
}

export interface AuthSignInLoading {
    type: AuthActionTypes.SIGN_IN_LOADING;
}

export interface AuthSignInSuccess {
    type: AuthActionTypes.SIGN_IN_SUCCESS,
    payload: string;
}

export interface AuthSignInFailure {
    type: AuthActionTypes.SIGN_IN_ERROR,
    payload: string
}

export interface AuthSignOut {
    type : AuthActionTypes.SIGN_OUT
}

export type Action =
    | AuthSignUpLoading
    | AuthSignUpFailure
    | AuthSignUpSuccess
    | AuthSignInLoading
    | AuthSignInSuccess
    | AuthSignInFailure
    | AuthSignOut