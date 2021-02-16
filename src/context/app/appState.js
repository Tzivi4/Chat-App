import React, { useReducer } from 'react'
import { SET_MESSAGE, SET_NAME } from '../../types'
import AppContext from './appContext'
import AppReducer from './appReducer'
import io from 'socket.io-client'

const AppState = ({ children }) => {
  const initialState = {
    messages: [],
    name: '',
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)

  const setMessage = data => {
    dispatch({
      type: SET_MESSAGE,
      payload: data,
    })
  }

  const setName = name => {
    dispatch({
      type: SET_NAME,
      payload: name,
    })
  }

  const sendMessage = message => {
    const socket = io(process.env.REACT_APP_BACKEND_URL)
    const data = {
      msg: message,
      timeData: Date.now(),
      owner: state.name,
    }
    socket.emit('message', data)
  }

  return (
    <AppContext.Provider
      value={{
        messages: state.messages,
        name: state.name,
        setMessage,
        setName,
        sendMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
