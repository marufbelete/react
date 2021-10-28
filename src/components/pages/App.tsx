import MainPage from './MainPage';
import AuthPage from './AuthPage';
import { Fragment } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ AuthPage }/>
                    <Route path="/private" component={ MainPage }/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
};

export default App;