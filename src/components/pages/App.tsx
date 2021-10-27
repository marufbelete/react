import MainPage from './MainPage';
import AuthPage from './AuthPage';
import { Fragment } from 'react';

const App = () => {
    return (
        <Fragment>
            <MainPage/>
            <AuthPage/>
        </Fragment>
    );
};

export default App;