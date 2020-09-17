import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import StoriesIndexContainer from './feed/stories_index_container';
import StoryShowContainer from './story/story_show_container';
import SplashContainer from './splash/splash_container';
import CreateStoryFormContainer from './story/create_story_form_container';
import EditStoryFormContainer from './story/edit_story_form_container';
import UserStoryContainer from './user/user_story_container';
import UserShowContainer from './user/user_show_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <Navbar />
        </header>

        <div className='main-content'>
            <Switch>
                <ProtectedRoute exact path='/stories/new' component={CreateStoryFormContainer} />
                <ProtectedRoute exact path='/stories/:storyId/edit' component={EditStoryFormContainer} />
                <ProtectedRoute exact path='/stories/:storyId' component={StoryShowContainer} />
                <ProtectedRoute exact path='/feed' component={StoriesIndexContainer} />
                <Route exact path='/users/:userId/profile' component={UserShowContainer} />
                <Route exact path='/users/:userId' component={UserStoryContainer} />
            </Switch>
            <AuthRoute exact path='/' component={SplashContainer} />
        </div>
    </div>
);

export default App;