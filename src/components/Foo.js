import React from 'react';

export default function Foo(props) {
  /*
    state and actions are passed in as props
  */
  const { counter, actions } = props;
  return <div>I am Foo! { counter }</div>;
}
