import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import { fourOhFour, Counter, Foo, Bar } from '../components';


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
        <Route path='*' component={fourOhFour} />
      </Route>
    </Router>
  );
};
