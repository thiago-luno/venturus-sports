import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './styles/index.scss';
import Header from './components/Header/Header';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import App from './App';
import Register from './views/Register/Register';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Breadcrumb />
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/user' exact={true} component={App} />
            <Route path='/user/new' component={Register} />
            {/* <Route component={ NotFound } /> */}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
