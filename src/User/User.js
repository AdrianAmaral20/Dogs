import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Components/Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="conta/" element={<Feed />} />
        <Route path="conta/postar" element={<UserPhotoPost />} />
        <Route path="conta/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
