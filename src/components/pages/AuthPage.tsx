import { Fragment } from 'react';
import Form from '../widgets/Form';
import AuthPageHeader from '../widgets/AuthPageHeader';

const AuthPage = () => {
    return (
        <Fragment>
            <AuthPageHeader isSignUp = {true}/>
            <Form isSignUp={ true } onSubmit= { () => console.log("Hello World")}/>
        </Fragment>
    );
};

export default AuthPage;
