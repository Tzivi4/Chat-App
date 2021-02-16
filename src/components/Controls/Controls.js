import React, { useContext, useState } from 'react'
import './styles.css'
import { SendButton } from '../Buttons/Buttons'
import AppContext from '../../context/app/appContext'

const Controls = () => {
  const { sendMessage } = useContext(AppContext)
  const [message, setMessage] = useState('')

  const handleClick = () => {
    if (message === '') return
    sendMessage(message)
    setMessage('')
  }

  return (
    <div className="actionsContainer">
      <div className="inputContainer">
        <input
          className="input"
          onChange={e => setMessage(e.target.value)}
          placeholder="Write a message..."
          value={message}
          type="text"
        />
      </div>
      <div className="actionButton">
        <div onClick={handleClick} className="buttonContainer">
          <SendButton width={24} height={24} />
        </div>
      </div>
    </div>
  )
}

export default Controls
