import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import DevTools from '../containers/DevTools';

/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const logger = createLogger();

const reduxRouterMiddleware = syncHistory(browserHistory);

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(logger, reduxRouterMiddleware, thunk),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};
