import React from 'react'
import './styles.css'

const Message = ({ content, time, id }) => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
  }
  const formatedTime = new Date(time).toLocaleTimeString('es-ES', options)
  return (
    <div id={id} className="messageContainer">
      <p className="content">{content}</p>
      <time className="time">{formatedTime}</time>
    </div>
  )
}

export default Message
