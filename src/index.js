import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import loadedStore from './store'
import App from './containers/App'

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss'

/**
 * `loadedStore` is required conditionally in order to exclude any dev-only
 * middleware, store enhancers, etc. See 'store/index.js' to learn more.
 */
ReactDOM.render(
  <Provider store={loadedStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
