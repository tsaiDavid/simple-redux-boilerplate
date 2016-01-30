import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router'
const middleware = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk, middleware)
)(createStore);

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  middleware.listenForReplays(store);
  return store;
};
