import React, { Component } from 'react'
import PropTypes from 'react'

export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  renderLabel = () => {
    const { counter } = this.props
    return (
      <div className='counter-even-label'>
        {counter % 2 === 0 ? 'even' : 'odd'}
      </div>
    )
  }

  render () {
    const { actions, counter } = this.props

    return (
      <div className='counter-container'>
        <div className='counter-num-label'>{counter}</div>
        {this.renderLabel()}
        <br />
        <div className='counter-buttons'>
          <button onClick={actions.decrement}>-</button>
          <button onClick={actions.increment}>+</button>
        </div>
      </div>
    )
  }
}
