import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import DashBoard from './components/dashboard';
import Login from './components/login';

// the "path" values should correspond to navigation.js' "Link to" values
export default (
  <Route path='/' component={App}>
    <IndexRoute component={DashBoard} />
    <Route path='dashboard' component={DashBoard} />
    <Route path='login' component={Login} />
  </Route>
);
