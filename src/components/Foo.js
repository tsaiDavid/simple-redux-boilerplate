import React from 'react';
import Counter from './Counter';

export default function Foo(props) {
  /*
    state and actions are passed in as props
  */
  const { counter, actions } = props;
  return (
    <div className="counter-container">
      <h3>I'M FOO</h3>
      <Counter counter={counter} actions={actions}/>
    </div>
  );
}
