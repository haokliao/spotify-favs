import React from 'react';
import './FeaturedArtists.css';
import Flickity from 'react-flickity-component';

/* eslint-disable global-require */

function FeaturedArtists() {
  return (
    <>
      <header>
        <div>
          spotify favs
        </div>
      </header>

      <div className="carousel">
        <Flickity>
          <img src={require('../imgs/orange.jfif')} alt="" />
          <img src="https://i.scdn.co/image/ab6761610000e5eb8da3e6e26f2cd05958f17a65" alt="placeholder" />
          <img src="https://i.scdn.co/image/ab6761610000e5eb09ac9d040c168d4e4f58eb42" alt="placeholder" />
          <img src="https://i.scdn.co/image/ab6761610000e5ebf0067e187cc9c0015be6191f" alt="placeholder" />
        </Flickity>
      </div>
    </>
  );
}

export default FeaturedArtists;
