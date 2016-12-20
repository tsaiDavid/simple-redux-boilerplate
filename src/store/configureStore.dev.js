import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

/**
 * https://github.com/zalmoxisus/redux-devtools-extension
 * Much easier to configure than the original - all you need is the browser extension!
 */
export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // Other Redux store enhancers may go here
  )
)
