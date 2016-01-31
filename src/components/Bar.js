import React from 'react';
import Counter from './Counter';


export default function Bar(props) {
  const { counter, actions } = props;
  return (
    <div className="counter-container">
      <h3>AND I'M BAR</h3>
      <Counter counter={counter} actions={actions}/>
    </div>
  );
}
