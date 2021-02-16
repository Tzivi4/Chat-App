import { SET_MESSAGE, SET_NAME } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }

    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      }

    default:
      break
  }
}
