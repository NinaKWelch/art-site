import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './style.css';
import { allArtists } from '../../utils/mockUtils';
import { Artist } from '../../types';
import ErrorPage from '../ErrorPage';
import PageTemplate from '../../templates/PageTemplate';

const ArtistAdminPage = () => {
  let params = useParams();
  const [artist, setArtist] = useState<Artist | null>(null)

  useEffect(() => {
    const currentArtist = allArtists.find((artist) => artist.nameUrl === params.artistId)
    currentArtist ? setArtist(currentArtist) : setArtist(null);
  }, [params.artistId])
  
  // Show an error page if artist is not found
  if (!artist) {
    return <ErrorPage />
  }

  return (
    <PageTemplate pageTitle={`${artist.firstName} ${artist.lastName}`}>
      <h3>Admin</h3>
    </PageTemplate>
  )
}

export default ArtistAdminPage