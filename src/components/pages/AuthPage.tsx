import { Fragment, useState } from 'react';
import Form from '../widgets/Form';
import { UserInputValues } from '../widgets/Form';
import AuthPageHeader from '../widgets/AuthPageHeader';
import SwitchText from '../widgets/SwitchText';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { authStateActionCreators, authActionCreators } from '../../store';
import { AuthError } from '../styled-components/AuthPageStyledComponents';

const AuthPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const authPageState = useSelector((state : any) => state.authPageState);
    const { error, loading } = useSelector((state : any) => state.auth);

    const [authError, setAuthError] = useState("");


    console.log(error);
    

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>, values : UserInputValues ) => {
        e.preventDefault();

        if(values.password.length === 0 || values.email.length === 0 ){
            setAuthError("Empty Fields");       
        }

        else {
            if(authPageState!.isSignUp) {
                if(values.password === values.passwordRepeat || values.passwordRepeat!.length > 0 ){
                    setAuthError("");
                    await dispatch(
                        authActionCreators.signUp(
                            values.email, 
                            values.password,
                            () => { history.push('/private')}
                        )
                    );
                }
                else {
                    setAuthError("Password Don't Match");
                }
            }
            else {
                setAuthError("");
                await dispatch(
                    authActionCreators.signIn(
                        values.email, 
                        values.password,
                        () => { history.push('/private')}
                    )
                );
            }
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

            <AuthError> { authError ?? error } </AuthError>

            <SwitchText 
                onClick = { handleAuthPageStateChange } 
                isSignUp = { authPageState!.isSignUp }
            />
        </Fragment>
    );
};

export default AuthPage;
