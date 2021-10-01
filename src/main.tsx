import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './styles/reset.css';

import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './pages/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Comfortaa', cursive,'Trebuchet MS', Helvetica, sans-serif;
        color: #2f2e41;
    }

    html {
        font-size:62.5%
    }

    body {
        padding: 0;
        margin: 0;
        padding: 3rem;
        max-width: 1440px;
        margin: auto;
    }

    button {
        border:none;
    }
`;

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
