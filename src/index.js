import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';


const store = configureStore();

// NOTE: In react-router-redux 2.1.0, these modules fail
// https://travis-ci.org/rackt/react-router-redux/jobs/104947473

// import { syncHistory } from 'react-router-redux';
// const middleware = syncHistory(browserHistory);
// middleware.listenForReplays(store);

ReactDOM.render(
  <Root store={store} history={ browserHistory }/>,
  document.getElementById('root')
);
