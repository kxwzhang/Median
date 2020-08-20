import React from "react";
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import StoriesIndexContainer from './feed/stories_index_container';

// switch to app
const App = () => (
    <div>
        <Modal />
        <header>
            <Navbar />
        </header>

        <Switch>
            <Route path='/' component={StoriesIndexContainer} />
        </Switch>
    </div>
);

export default App;