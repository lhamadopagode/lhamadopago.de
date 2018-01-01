import React, { Component } from 'react';

export default function MusicCard(props) {
  return (
    <div className="col-md-4"> 
      <div className="music-card">
        <div className="music-card__image">
          <img className="img-fluid" src="http://placehold.it/200x200" alt=""/>
        </div>
        <div className="music-card__text">
          <h4>Nome do artista</h4>
          <span>Nome da música</span>
          <span>Nome do álbum</span>
        </div>
      </div>
    </div>
  )
}
