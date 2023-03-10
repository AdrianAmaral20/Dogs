import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './User/User';
import { UserStorage } from './UserContext';
import Photo from './Components/Photo/Photo';
import UserProfile from './User/UserProfile';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
