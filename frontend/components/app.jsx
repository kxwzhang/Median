import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import Navbar from './navbar/navbar';

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