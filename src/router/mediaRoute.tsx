import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MediaHome from '../components/mediaMessages/mediaHome';
import MediaMessages from '../components/mediaMessages/mediaDirect';

const MediaRoute: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MediaHome />} />
          <Route path='/direct' element={<MediaMessages />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MediaRoute;
