import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './pages/Error';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/survey'>
                    <Survey />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
