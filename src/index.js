import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

import { configureStore } from './store/configureStore';
import App from './containers/App';
import DevTools from './containers/DevTools';

const store = configureStore();

ReactDOM.render(
  /**
   * Provider is a component provided to us by the 'react-redux' bindings that
   * wraps our app - thus making the Redux store/state available to our 'connect()'
   * calls in component hierarchy below.
   */
  <Provider store={store}>
    <div>
      <App />
      {/* If it is development environment, we include DevTools below */}
      {process.env.NODE_ENV === 'development' ? <DevTools /> : ''}
    </div>
  </Provider>,
  document.getElementById('root')
);
