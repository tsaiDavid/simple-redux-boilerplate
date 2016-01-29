import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { Root } from '../containers/Root';
import { App } from '../containers/App';
import NotFoundView from '../views/NotFoundView';

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={App} />
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
  </Route>
)