import { Fragment } from 'react';
import Form from '../widgets/Form';
import { UserInputValues } from '../widgets/Form';
import AuthPageHeader from '../widgets/AuthPageHeader';
import SwitchText from '../widgets/SwitchText';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { authStateActionCreators, authActionCreators } from '../../store';


const AuthPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const authPageState = useSelector((state : any) => state.authPageState);
    const { error, loading, auth } = useSelector((state : any) => state.auth);


    const onSubmit = (e : React.FormEvent<HTMLFormElement>, values : UserInputValues ) => {
        e.preventDefault();

        if(authPageState!.isSignUp){
            dispatch(authActionCreators.signUp(values.email, values.password));

            if(auth != null){
                history.push('/private');
            }
        }
        else {
            console.log(values);
        }
    }

    const handleAuthPageStateChange = () => {
        dispatch(authStateActionCreators.toggleAuthPageState());
    }

    return (
        <Fragment>
            <AuthPageHeader isSignUp = { authPageState!.isSignUp }/>
            <Form 
                isSignUp= { authPageState!.isSignUp } 
                onSubmit= { onSubmit }
                loading = { loading }
            />
            <SwitchText 
                onClick = { handleAuthPageStateChange } 
                isSignUp = { authPageState!.isSignUp }
            />
        </Fragment>
    );
};

export default AuthPage;
