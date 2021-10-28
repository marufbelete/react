import { Fragment } from 'react';
import Form from '../widgets/Form';
import { UserInputValues } from '../widgets/Form';
import AuthPageHeader from '../widgets/AuthPageHeader';
import SwitchText from '../widgets/SwitchText';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { authStateActionCreators, authActionCreators } from '../../store';
import { SwitchTextOne } from '../styled-components/AuthPageStyledComponents';

const AuthPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const authPageState = useSelector((state : any) => state.authPageState);
    const { error, loading, auth } = useSelector((state : any) => state.auth);


    const onSubmit = (e : React.FormEvent<HTMLFormElement>, values : UserInputValues ) => {
        e.preventDefault();

        if(authPageState!.isSignUp){
            dispatch(authActionCreators.signUp(values.email, values.password));

            console.log(auth + " : " + error);
            
            if(auth != null){
                // history.push('/private');
            }
        }
        else {

            dispatch(authActionCreators.signIn(values.email, values.password));

            console.log(auth + " : " + error);

            if (auth != null) {
                // history.push('/private');

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
            <SwitchTextOne>{ auth }</SwitchTextOne>
            <SwitchText 
                onClick = { handleAuthPageStateChange } 
                isSignUp = { authPageState!.isSignUp }
            />
        </Fragment>
    );
};

export default AuthPage;
