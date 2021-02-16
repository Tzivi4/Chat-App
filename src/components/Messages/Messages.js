import React, { useContext } from 'react'
import './styles.css'
import Message from '../Message/Message'
import AppContext from '../../context/app/appContext'

const Messages = () => {
  const { messages, name } = useContext(AppContext)
  return (
    <ul className="messagesList">
      {messages.map(message => (
        <Message
          id={message.owner === name && 'i'}
          key={message.timeData}
          time={message.timeData}
          content={message.msg}
        />
      ))}
    </ul>
  )
}

export default Messages
