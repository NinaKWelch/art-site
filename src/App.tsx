import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import HomePage from './routes/HomePage';
import ArtistPage from './routes/ArtistPage';
import ArtistAdminPage from './routes/ArtistAdminPage';
import ArtistPortfolioPage from './routes/ArtistPortfolioPage';
import ArtistPortfolioPageCategory from './routes/ArtistPortfolioPage/ArtistPortfolioPageCategory';
import ErrorPage from './routes/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
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
