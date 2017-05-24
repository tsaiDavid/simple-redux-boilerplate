import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';

/**
 * Component is exported for conditional usage in Root.js
 */
const Root = (props) => {
  const { store } = props;
  const content = process.env.NODE_ENV === 'production' ?
    <App /> : (
      <div>
        <App />
        {/* Being the dev version of our Root component, we include DevTools below */}
        <DevTools />
      </div>
    );

  return (
    /**
     * Provider is a component provided to us by the 'react-redux' bindings that
     * wraps our app - thus making the Redux store/state available to our 'connect()'
     * calls in component hierarchy below.
     */
    <Provider store={store}>
      {content}
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
