import React from 'react'

export default function Foo (props) {
  /*
    State and Actions are available here as well
  */
  const { counter, actions } = props;
  return <div>I am Foo! { counter }</div>
}
