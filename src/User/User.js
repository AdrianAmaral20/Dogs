import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Components/Feed/Feed';
import Head from '../Components/Helper/Head';
import NotFound from '../NotFound';
import { UserContext } from '../UserContext';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/conta" element={<Feed user={data.id} />} />
        <Route path="conta/postar" element={<UserPhotoPost />} />
        <Route path="conta/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
