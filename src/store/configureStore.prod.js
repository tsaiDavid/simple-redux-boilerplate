import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const reduxRouterMiddleware = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(reduxRouterMiddleware, thunk)
)(createStore);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
