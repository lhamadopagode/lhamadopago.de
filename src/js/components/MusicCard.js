import React, { Component } from 'react';

export default function MusicCard(props) {
  return (
    <div className="music-card">
      <div className="music-card__image">
        <img className="img-fluid" src="http://placehold.it/250x250" alt=""/>
      </div>
      <div className="music-card__text">
        <h4>Título da música</h4>
      </div>
    </div>
  )
}
