import { Fragment } from 'react';
import Form from '../widgets/Form';
import AuthPageHeader from '../widgets/AuthPageHeader';
import SwitchText from '../widgets/SwitchText';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { actionCreators } from '../../store';


const AuthPage = () => {

    const dispatch = useDispatch();
    const state = useSelector((state : any) => state.authPageState);

    console.log(state!.isSignUp);
    

    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(" I AM SUBMITTED ");
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
