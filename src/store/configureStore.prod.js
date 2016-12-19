import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunk]

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
  // Other Redux store enhancers may go here
)
