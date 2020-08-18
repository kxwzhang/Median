import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <Navbar />
        </header>

        <Switch>
        </Switch>
    </div>
);

export default App;