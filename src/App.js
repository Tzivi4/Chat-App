import React, { useContext, useEffect } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Aside from './components/Aside/Aside'
import appContext from './context/app/appContext'
import io from 'socket.io-client'
import sid from 'shortid'

function App() {
  const { setName, setMessage } = useContext(appContext)

  useEffect(() => {
    console.log(process.env.REACT_APP_BACKEND_URL)
    setName(sid())
    const socket = io(process.env.REACT_APP_BACKEND_URL)
    socket.on('newMessage', message => setMessage(message))
    return () => socket.disconnect()
  }, [])

  return (
    <div className="container">
      <Main />
      <Aside />
    </div>
  )
}

export default App
