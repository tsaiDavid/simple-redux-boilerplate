import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes'

// The second argument is `action`, we've destructed it to extract just the type key
export default function counter (state = 0, { type }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return state + 1

    case DECREMENT_COUNTER:
      return state - 1

    default:
      return state
  }
}
