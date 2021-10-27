import { AuthPageStateActionTypes } from '../action-types/authPageStateTypes';

export const toggleAuthPageState = () => {
    return {
        type : AuthPageStateActionTypes.AUTH_PAGE_STATE_TOGGLE
    }
}