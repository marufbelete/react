import { Fragment, useState } from 'react';
import LoginForm from '../widgets/LoginForm';
import { UserInputValues } from '../widgets/LoginForm';
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

        if(values.password.length === 0 || values.username.length === 0 ){
            setAuthError("Empty Fields");       
        }

        else {
            if(authPageState!.isSignUp) {
                if(values.password === values.passwordRepeat || values.passwordRepeat!.length > 0 ){
                    setAuthError("");
                    await dispatch(
                        authActionCreators.signUp(
                            values.username, 
                            values.password,
                            values.name,
                            (token : string) => { 
                                localStorage.setItem('token', token);
                                history.push('/posts');
                            }
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
                        values.username, 
                        values.password,
                        (token : string) => { 
                            localStorage.setItem('token', token);
                            history.push('/posts');
                        }
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
            <LoginForm 
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
