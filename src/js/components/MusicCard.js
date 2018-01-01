import React, { Component } from 'react';

export default function MusicCard(props) {
  debugger;
  return (
    <div className="col-md-4"> 
      <div className="music-card">
        <div className="music-card__image">
          <img className="img-fluid" src={props.albumCover} alt=""/>
        </div>
        <div className="music-card__text">
          <h4>{props.artist}</h4>
          <span>{props.trackName}</span>
          <span>{props.albumTitle}</span>
        </div>
      </div>
    </div>
  )
}
