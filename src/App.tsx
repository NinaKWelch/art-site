import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppStateValue } from './state';
import { allArtists } from './utils/mockUtils';
import LandingPage from './routes/LandingPage';
import LoginPage from './routes/LoginPage';
import HomePage from './routes/HomePage';
import ArtistPage from './routes/ArtistPage';
import ArtistAdminPage from './routes/ArtistAdminPage';
import ArtistPortfolioPage from './routes/ArtistPortfolioPage';
import ArtistPortfolioPageCategory from './routes/ArtistPortfolioPage/ArtistPortfolioPageCategory';
import ErrorPage from './routes/ErrorPage';

const App = () => {
  const [state, dispatch] = useAppStateValue();
console.log(state)
  useEffect(() => {
    dispatch({ type: 'SET_ARTIST_LIST', payload: allArtists })
  }, [dispatch])

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/:artistId' element={<ArtistPage />} />
            <Route path='/:artistId/admin' element={<ArtistAdminPage />} />
            <Route path='/:artistId/portfolio' element={<ArtistPortfolioPage />} >
              <Route path='/:artistId/portfolio/:categoryId' element={<ArtistPortfolioPageCategory />} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
