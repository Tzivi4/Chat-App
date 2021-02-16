import React from 'react'
import './styles.css'
import Controls from '../Controls/Controls'
import Messages from '../Messages/Messages'

const Main = () => {
  return (
    <div className="main">
      <Messages />
      <Controls />
    </div>
  )
}

export default Main
