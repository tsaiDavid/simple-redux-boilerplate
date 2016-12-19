import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // Other Redux store enhancers may go here
  )
)
