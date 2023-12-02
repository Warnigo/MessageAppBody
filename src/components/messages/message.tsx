import React from 'react';


const Message = () => {
  return (
    <div className="flex">
      <div className="user-list">
        <h1>Users</h1>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
        </ul>
      </div>
      <div className="chat-list">
        <h1>Chat</h1>
        <div>
          <div className="chat-item">
            <strong>User 1:</strong> Hi!
          </div>
          <div className="chat-item">
            <strong>User 2:</strong> Hi, How are you? 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
