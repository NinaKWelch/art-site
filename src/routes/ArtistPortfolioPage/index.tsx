import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';
import { artists } from '../../utils/mockUtils';
import { Artist, Portfolio } from '../../types/mockInterfaces';
import { categories } from '../../utils/mockUtils'
import ErrorPage from '../ErrorPage';
import PageTemplate from '../../templates/PageTemplate'


const PortfolioPage = () => {
  let params = useParams();
  const [artist, setArtist] = useState<Artist | null>(null)

  useEffect(() => {
    const currentArtist = artists.find((artist) => artist.nameUrl === params.artistId)
    currentArtist ? setArtist(currentArtist) : setArtist(null);
  }, [params.artistId])
  
  // Show an error page id artist is not found
  if (!artist) {
    return <ErrorPage />
  }

  const getCategories = (items: Portfolio[]) => categories.filter((category) => items.find((item) => item.category.id === category.id))

  return (
    <PageTemplate pageTitle={`${artist.firstName} ${artist.lastName}`}>
      <h3>Portfolio</h3>
      <nav>
        {artist.portfolio && getCategories(artist.portfolio).map((category) => (
          <NavLink
            style={({ isActive }) => {
              return {
                margin: "1rem",
                color: isActive ? "red" : "",
              };
            }}
            to={`/${artist.nameUrl}/portfolio/${category.nameUrl}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </PageTemplate>
  )
}

export default PortfolioPage