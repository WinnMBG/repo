import React, { useState, useEffect } from 'react';
import './Search.css';
import {BsSearch} from 'react-icons/bs';
import axios from 'axios';
import { Buffer } from 'buffer';
import Playlist_List from '../Playlist_List/Playlist_List.js';
import Playlist_details from '../Playlist_details/Playlist_details.js';

function Search(){

  const [res, setRes] = useState(0); //nb résultats trouvés
  const [datas, setData] = useState([]); // données (playlists)
  const [motscles, setMotsCles] = useState(""); //mots clés de la barre de recherche
  const [token, setToken] = useState(''); // token récupéré
  const [playlists_id,setPlaylists_id] = useState([]); // liste des id des playlists
  const [playlist_picked, setPlay] = useState(false); //true => playlist en détail, page de recherche sinon
  const [selected_id,setSelected] = useState(''); //id de la playlist que l'on veut voir en détail

  let noms = [];
  let id = [];

  useEffect(() => {
    // Appel a l'api afin d'obtenir un token d'accès
    const result = axios('https://accounts.spotify.com/api/token', {
			'method': 'POST',
			'headers': {
				 'Content-Type':'application/x-www-form-urlencoded',
				 'Authorization': 'Basic ' + (Buffer.from(("4cfebfd8318f4f58a1297e935a62a5a1"+":"+"f05abee3b41b4099b2b4ee76dbaea877")).toString('base64')),
			},
			data: 'grant_type=client_credentials'
		});
    result.then((resp) => {
      setToken(resp.data.access_token);
      console.log(token);
  }).catch((err) => console.log(err))}
	, [])

  const refreshToken = () => {
    //Rafraichissement du token si celui ci n'est plus valide
    const result = axios('https://accounts.spotify.com/api/token', {
			'method': 'POST',
			'headers': {
				 'Content-Type':'application/x-www-form-urlencoded',
				 'Authorization': 'Basic ' + (Buffer.from(("4cfebfd8318f4f58a1297e935a62a5a1"+":"+"f05abee3b41b4099b2b4ee76dbaea877")).toString('base64')),
			},
			data: 'grant_type=client_credentials'
		});
    result.then((resp) => {
      setToken(resp.data.access_token);
  }).catch((err) => console.log(err))
}

const refresh = setTimeout(refreshToken, 3600000);

  //Récupération de ce qui est écrit dans la barre de recherche
  const handleSearch = (e) => {
    let value = e.target.value;
    setMotsCles(value);
  }

  //Appel à l'API afin d'obtenir des playlists en fonction des mots clés
  const searchPlay = (words) => {
    axios.get('https://api.spotify.com/v1/search',{
      'headers' : {
        'Content-type' : 'application/json',
        'Authorization' : 'Bearer '+token
      }, params : {q:words, type:'playlist', limit:'50', market:'FR'}
    }).then((response) => {
        setRes(response.data.playlists.total);
        response.data.playlists.items.map((element) => {
        noms.push(element.name);
        id.push(element.id);
      });
      //console.log(noms);
      //console.log(id);
      setData(noms);
      setPlaylists_id(id);
    })
    .catch((err) => console.log(err))
  }

  //passe l'état à true et initialise l'id de la playlist dont on veut les détails
  const seePlay = (bool, play_index) => {
    setPlay(bool);
    //console.log(playlists_id[play_index]);
    setSelected(playlists_id[play_index]);
  }

  //en fonction de playlist_picked, un booléen on aura soit le résultat de la recherche ou bien une playlist en détail
  return (
    <>
    {(playlist_picked===false)&&
    (<><div className='search_container'>
        <input 
          name='SearchBar'
          id='SearchBar'
          type='text' 
          placeholder='Rechercher une playlist dans Spotify'
          onChange={handleSearch}/>
        <BsSearch className='icon'/>
        <button onClick={() => searchPlay(motscles)}>Rechercher</button>
    </div>
    <div className='search_results'>
      <h1 className='search_title'>{res} Résultats trouvés</h1>
      <Playlist_List list={datas} set={seePlay}/>
    </div></>)}
    {playlist_picked && <Playlist_details t={token} play_id={selected_id}/>}
    </>
  )
}

export default Search;