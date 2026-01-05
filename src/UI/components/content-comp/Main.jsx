import React from 'react';
import Profile from './Profile/Profile';
import Chat from './Chat/Chat';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main className='appMain'>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat"    element={<Chat />} />
      </Routes>
    </main>
  );
}

export default Main;