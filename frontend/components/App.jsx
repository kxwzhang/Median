import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import StoriesIndexContainer from './feed/stories_index_container';
import StoryShowContainer from './story/story_show_container';
import SplashContainer from './splash/splash_container';

// switch to app
const App = () => (
    <div>
        <Modal />
        <header>
            <Navbar />
        </header>
     
        <Switch>
            <ProtectedRoute exact path='/stories/:storyId' component={StoryShowContainer} />
            <ProtectedRoute exact path='/feed' component={StoriesIndexContainer} />
        </Switch>
        <AuthRoute exact path='/' component={SplashContainer} />
    </div>
);

export default App;