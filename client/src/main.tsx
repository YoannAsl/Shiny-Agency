import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles';
import './styles/reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import ThemeProvider from './context/themeContext';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './pages/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Footer from './components/Footer';
import SurveyProvider from './context/surveyContext';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ThemeProvider>
                    <SurveyProvider>
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
                        <Footer />
                    </SurveyProvider>
                </ThemeProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
