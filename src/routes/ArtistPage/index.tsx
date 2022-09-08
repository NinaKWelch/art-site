import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './style.css';
import { artists } from '../../utils/mockUtils';
import { Artist } from '../../types/mockInterfaces';
import ErrorPage from '../ErrorPage';
import PageTemplate from '../../templates/PageTemplate';
import ArtistPageBio from './ArtistPageBio';

const ArtistPage = () => {
  let params = useParams();
  const [artist, setArtist] = useState<Artist | null>(null)

  useEffect(() => {
    const currentArtist = artists.find((artist) => artist.nameUrl === params.artistId)
    currentArtist ? setArtist(currentArtist) : setArtist(null);
  }, [params.artistId])
  
  // Show an error page if artist is not found
  if (!artist) {
    return <ErrorPage />
  }

  return (
    <PageTemplate pageTitle={`${artist.firstName} ${artist.lastName}`}>
      <ArtistPageBio />
    </PageTemplate>
  )
}

export default ArtistPage