import React from 'react';

export default function Bar(props) {
  const { counter, actions } = props;
  return (
    <div className="counter-container">
      <h3>AND I'M BAR</h3>
      <h3>Current Count: { counter }</h3>
      <div>
        <button onClick={() => { actions.decrement(); }}>-</button>
        <button onClick={() => { actions.increment(); }}>+</button>
      </div>
    </div>
  );
}
