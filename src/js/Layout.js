import React, { Component } from 'react';
import MusicCard from './components/MusicCard'

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cards: [],
    }
    
  }
  
  componentDidMount(){
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Davidmarquardt&api_key=d268d26bb6b9a74cfb74137c8518c3b5&format=json').then((response) => {
      return response.json();
    }).then((json) => {
      let recentTracks = json.recenttracks;
      debugger;
      let tracks = recentTracks.track.slice(0, 3);
      this.setState({
        cards: tracks,
      });
      window.pagode = this.state
    });
  }
  
  renderCards(card){
    return (
      <MusicCard 
        albumTitle={card.album["#text"]}
        albumCover={card.image[2]["#text"]}
        artist={card.artist["#text"]}
        trackName={card.name}
      />
    )
  }

  render(){
    let cardList = this.state.cards.map(this.renderCards.bind(this));
    return(
      <div className="row align-items-stretch">
        {cardList}
      </div>
    );
  }
};

export default Layout;