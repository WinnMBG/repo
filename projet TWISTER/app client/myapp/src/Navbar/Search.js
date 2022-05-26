import axios from 'axios';
import {useState} from 'react';
import React from 'react';

const Search = () => {
    const [recherche, setRecherche] = useState("");

    const click = () => {
        return axios.get('http://localhost:4000/api/get/',{withCredentials: true})
    }

    return(<div className='Search'>
        <input type="text" placeholder='Add a nakama ?'/>
        <button onClick={(e) => click(e.target.value)}>Rechercher</button>
    </div>);
    //return null;
}

export default Search;