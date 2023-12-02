import React from 'react'
import { Link } from 'react-router-dom'

const MediaMessages: React.FC = () => {
  return (
    <div>
      <div className="chat-list">
        <Link to={'/'}><p>back</p></Link>
        <h1>Chat</h1>
        <div>
          <div className="chat-item">
            <strong>User 1:</strong> Hi!
          </div>
          <div className="chat-item">
            <strong>User 2:</strong> Hello, How are you? 
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaMessages;
