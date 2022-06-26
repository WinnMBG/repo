import React, { Component } from 'react'
import './Playlist_List.css';

class Playlist_List extends Component {

  //Permet de retourner le résultat de la recherche grâce à la liste de playlists rendu grâce
  //à la props list
  
  render() {
    return (
      <div className='tab'>
           {this.props.list.map((val,index) => {
                return(
                <div className='tab_element' key={index}>
                    <h4 className='text'>{val}</h4>
                    <button onClick={() => this.props.set(true,index)}> Voir </button>
                </div>
                );
            })}
      </div>
    );
  }
}

export default Playlist_List;
