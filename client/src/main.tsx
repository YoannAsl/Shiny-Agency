import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles';
import './styles/reset.css';

import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './pages/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/survey/:questionNumber'>
                    <Survey />
                </Route>
                <Route path='/results'>
                    <Results />
                </Route>
                <Route path='/freelances'>
                    <Freelances />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
