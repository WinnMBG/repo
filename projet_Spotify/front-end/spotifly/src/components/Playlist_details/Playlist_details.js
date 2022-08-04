import React, { useState , useEffect} from 'react';
import './Playlist_details.css';
import axios from 'axios';
import IMG from '../../images/Ellipse_3.png';
import IMG1 from '../../images/Rounded Rectangle_2.png';
import IMG2 from '../../images/button.png';

function Playlist_details(props) {

    const [name, setName] = useState(''); //état nom de la playlist
    const [nb_followers, setFollow] = useState(0); // état nb followers
    const [tracks, setTracks] = useState([]); //état liste des musiques
    const [owner_name, setOwner] = useState(''); // état propriétaire de la playlist
    const [img_url,setURL] = useState(''); // url de l'image de cover
    const [tracks_artists, set] = useState([]); // nom des artistes/ musiques

    let tracks_name = [];
    let artists = [];
   

    useEffect(() => {
        //Appel unique à l'API afin d'obtenir les infos sur la playlist selectionnée
        axios.get(('https://api.spotify.com/v1/playlists/'+props.play_id),{
        'headers' : {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer '+props.t
        }
      }).then((response) => {
          setName(response.data.name);
          setFollow(response.data.followers.total);
          setOwner(response.data.owner.display_name);
          response.data.tracks.items.map((element) => {
            element.track.artists.map((el2) => {
                artists.push(el2.name);
            })
            tracks_name.push(element.track.name);
        });
        setTracks(tracks_name);
        set(artists);
      })
      .catch((err) => console.log(err))} , [])

      useEffect(() => {
        //Appel uique à l'API afin d'obtenir l'URL de l'image de la playlist selectionnée
        axios.get(('https://api.spotify.com/v1/playlists/'+props.play_id+'/images'),{
        'headers' : {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer '+props.t
        }
      }).then((response) => {
        response.data.map((element) => {
            setURL(element.url);
        })
        console.log(img_url);
        })
      .catch((err) => console.log(err))} , [])

    

  return (
    <div className="container">
        <div className="pic">
            <img src={img_url} alt="artwork here"/>
        </div>
        <h1 className="title">{name}</h1>
        <div className="artist">
            <button type="submit" className="btn1">FOLLOWING</button>
            <h2 className="artist_name">{owner_name} ⸱ {nb_followers} followers</h2>
        </div>
        <div className="shu_btn">
            <button type="submit" className="btn2">SHUFFLE PLAY</button>
        </div>
        <section id="playlist_sec">
            <div className="playhead">
                <h1>Download</h1>
                <img src={IMG1} alt="rect"/>
                <img src={IMG} alt="cercle"/>
            </div>
                {
                    tracks.map((el,index) => {
                        return(
                            <div className='playlist_items' key={index}>
                                <h2>{el}</h2>
                                    <h3>{tracks_artists[index]}</h3>
                                    <img src={IMG2} alt='buttons'/>
                            </div>
                        )
                    })
                }
        </section>
    </div>
    
  )
}

export default Playlist_details;