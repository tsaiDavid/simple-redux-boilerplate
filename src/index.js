import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';
/**
  * Below we have imports that allow us to perform client side routing.
  */
import { Router, Route, browserHistory } from 'react-router'
import { createHistory } from 'history';
import routes from './routes';

const history = useRouterHistory(createHistory);
const store = configureStore();

ReactDOM.render(
  <Root history={browserHistory} routes={routes} store={store}/>,
  document.getElementById('root')
);
