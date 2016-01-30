import { combineReducers } from 'redux';
import counter from './counter';

/* Added routeReducer from react-router-redux */
/* This captures routes as state */
import { routeReducer } from 'react-router-redux';

/**
 * combineReducers is important to understand. As your app might grow in size
 * and complexity, you will likely begin to split your reducers into separate
 * functions - with each one managing a separate slice of the state! This helper
 * function from 'redux' simply merges the reducers.
 *
 * If you're transitioning from Flux, you will notice we only use one store, but
 * instead of relying on multiple stores to manage diff parts of the state, we use
 * various reducers and combine them.
 *
 * More info: http://rackt.org/redux/docs/api/combineReducers.html
 */

const rootReducer = combineReducers({
  counter, // you might be used to: counter: counter,
  routing: routeReducer // add routeReducer as a prop on state
});

export default rootReducer;
