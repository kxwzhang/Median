import React from "react";
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Median</h1>
            <GreetingContainer />
        </header>

        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;