import React, { PropTypes } from 'react';

export default function Counter (props) {
  const { counter, actions } = props;
  return (
    <div className="counter-container">
      <h3>Current Count: {counter}</h3>
      <br />
      {/* Below, the even or odd statement is simply used to demonstrate how one could
      easily use a ternary operator to conditionally show an 'even' or 'odd' string
      based on the counter's value on state. */}
      <div>Even or Odd: {counter % 2 === 0 ? 'even' : 'odd'}</div>
      <br />
      <div>
        <button onClick={() => { actions.decrement(); }}>-</button>
        <button onClick={() => { actions.increment(); }}>+</button>
      </div>
    </div>
  );
}
