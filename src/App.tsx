import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import HomePage from './routes/HomePage';
import ArtistPage from './routes/ArtistPage'
import ArtistPortfolioPage from './routes/ArtistPortfolioPage';
import ArtistPortfolioPageSection from './routes/ArtistPortfolioPage/ArtistPortfolioPageSection';
import ErrorPage from './routes/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/:artistId' element={<ArtistPage />} />
      <Route path='/:artistId/portfolio' element={<ArtistPortfolioPage />} >
        <Route path='/:artistId/portfolio/:sectionId' element={<ArtistPortfolioPageSection />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
