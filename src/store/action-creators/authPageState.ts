import { ActionTypes } from '../action-types';

export const toggleAuthPageState = () => {
    return {
        type : ActionTypes.AUTH_PAGE_STATE_TOGGLE
    }
}