import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

import Home from './views/home/Home';
import History from './views/simulations-history/History';
import NotFound from './views/errors/NotFound';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/simulations' exact={true} component={History}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </ BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

