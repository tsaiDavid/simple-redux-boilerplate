import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import { Link } from 'react-router';
import Footer from '../components/Footer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, actions, children} = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">
          <div id="main-app-title">Simple Redux Boilerplate</div>
          <div>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/foo">Foo</Link></span>
            <span><Link to="/bar">Bar</Link></span>
          </div>
        </div>
          <div>
            {/* Here's a trick: we pass those props into the children by mapping
              and cloning the element, followed by passing props in. Notice that
              those props have been unpacked above! */}
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { counter, actions });
            })}
          </div>
          <Footer />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
