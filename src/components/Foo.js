import React from 'react';

export default function Foo(props) {
  /*
    state and actions are passed in as props
  */
  const { counter, actions } = props;
  return (
    <div className="counter-container">
      <h3>I'M FOO</h3>
      <h3>Current Count: { counter }</h3>
      <div>
        <button onClick={() => { actions.decrement(); }}>-</button>
        <button onClick={() => { actions.increment(); }}>+</button>
      </div>
    </div>
  );
}
