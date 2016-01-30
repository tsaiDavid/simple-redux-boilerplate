import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    );
  }
};
