import React from 'react';
import ReactDOM from 'react-dom';

import { syncHistory } from 'react-router-redux';
import { hashHistory } from 'react-router'

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';


const store = configureStore();

// NOTE: In react-router-redux 2.1.0, these modules fail
// https://travis-ci.org/rackt/react-router-redux/jobs/104947473

// const middleware = syncHistory(hashHistory);
// middleware.listenForReplays(store);

ReactDOM.render(
  <Root store={store} history={hashHistory}/>,
  document.getElementById('root')
);
