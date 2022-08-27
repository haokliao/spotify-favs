import React from 'react';
import './SpotFavs.css';
import FeaturedArtists from './components/FeaturedArtists';
import RecentlyListenedGrid from './components/RecentlyListenedGrid';

export default function SpotFavs() {
  return (
    <>
      <FeaturedArtists />
      <RecentlyListenedGrid />
    </>
  );
}
