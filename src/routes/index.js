import React from 'react';
<<<<<<< HEAD
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
=======
import { Router, Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import { Counter, Foo, Bar } from '../components';

export default (props) => {
  /* history preserves browser history so things like the back button work */
  const { history } = props;

  return (
    <Router history={history}>
      {/* App acts as a wraper for the child components*/}
      <Route path="/" component={App}>
        {/* IndexRoute is the initial component that is loaded*/}
        <IndexRoute component={Counter}/>
        {/* Foo is rendered when path is /foo */}
        <Route path="foo" component={Foo}/>
        {/* Bar is rendered when path is /bar */}
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  );
};
>>>>>>> redux-routing
