import MainPage from './MainPage';
import AuthPage from './AuthPage';
import PostsPage from './PostsPage';
import AddPostPage from './AddPostPage';
import { Fragment } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

const App = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ AuthPage }/>
                    <Route path="/main" component={ MainPage }/>
                    <Route path="/posts" component={ PostsPage }/>
                    <Route path="/addPosts" component={ AddPostPage }/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
};

export default App;