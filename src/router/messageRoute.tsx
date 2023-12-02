import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Message from '../components/messages/message'

const MessageRoute: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MessageRoute;
