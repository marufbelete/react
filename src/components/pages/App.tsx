import MainPage from './MainPage';
import AuthPage from './AuthPage';
import { Fragment } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Route exact path="/" component={ AuthPage }/>
                <Route exact path="/private" component={ MainPage }/>
            </BrowserRouter>
           
        </Fragment>
    );
};

export default App;