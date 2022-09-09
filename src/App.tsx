import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/UserContext'
import { artists } from './utils/mockUtils';
import { User } from './types/mockTypes';
import LandingPage from './routes/LandingPage';
import LoginPage from './routes/LoginPage';
import HomePage from './routes/HomePage';
import ArtistPage from './routes/ArtistPage';
import ArtistAdminPage from './routes/ArtistAdminPage';
import ArtistPortfolioPage from './routes/ArtistPortfolioPage';
import ArtistPortfolioPageCategory from './routes/ArtistPortfolioPage/ArtistPortfolioPageCategory';
import ErrorPage from './routes/ErrorPage';

const App = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log("USER: ", state.currentUser)
  const loginUser = (email: string, password: string) => {
    const user: User | undefined = artists.find((artist) => artist.email === email && artist.password === password)

    user && dispatch({ type: 'LOGIN_USER', payload: user })
  }

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<LoginPage handleLoginUser={loginUser} />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/:artistId' element={<ArtistPage />} />
      <Route path='/:artistId/admin' element={<ArtistAdminPage />} />
      <Route path='/:artistId/portfolio' element={<ArtistPortfolioPage />} >
        <Route path='/:artistId/portfolio/:categoryId' element={<ArtistPortfolioPageCategory />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
