import React, { Component, PropTypes } from 'react';
import styles from './Counter.scss';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    return (
      <div className={styles.counterContainer}>
        <h3>Current Count: {this.props.counter}</h3>
        <br />
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div>Even or Odd: {this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div>
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
