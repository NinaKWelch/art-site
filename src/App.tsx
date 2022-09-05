import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage';
import HomePage from './routes/HomePage';
import ArtistPage from './routes/ArtistPage'
import PortfolioPage from './routes/PortfolioPage';
import PortfolioPageSection from './routes/PortfolioPage/PortfolioPageSection';
import ErrorPage from './routes/ErrorPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/:artistId' element={<ArtistPage />} />
      <Route path='/:artistId/portfolio' element={<PortfolioPage />} >
        <Route path='/:artistId/portfolio/:sectionId' element={<PortfolioPageSection />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
