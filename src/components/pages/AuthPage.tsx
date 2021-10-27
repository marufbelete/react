import { Fragment } from 'react';
import Form from '../widgets/Form';
import { UserInputValues } from '../widgets/Form';
import AuthPageHeader from '../widgets/AuthPageHeader';
import SwitchText from '../widgets/SwitchText';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { actionCreators } from '../../store';


const AuthPage = () => {

    const dispatch = useDispatch();
    const state = useSelector((state : any) => state.authPageState);

    const onSubmit = (e : React.FormEvent<HTMLFormElement>, values : UserInputValues ) => {
        e.preventDefault();
        console.log(values);
    }

    const handleAuthPageStateChange = () => {
        dispatch(actionCreators.toggleAuthPageState());
    }

    return (
        <Fragment>
            <AuthPageHeader isSignUp = { state!.isSignUp }/>
            <Form 
                isSignUp= { state!.isSignUp } 
                onSubmit= { onSubmit }
            />
            <SwitchText 
                onClick = { handleAuthPageStateChange } 
                isSignUp = { state!.isSignUp }
            />
        </Fragment>
    );
};

export default AuthPage;
