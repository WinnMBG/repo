import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = (window.localStorage.movies ? window.localStorage.movies.split(",") : []);
        
        for(let i=0; i < moviesId.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=5858ee6eb60999e939c81351b632d815&language=fr-FR`)
            .then((res) => setListData((listData) => [...listData, res.data]));
        }
    },[])

    return(
        <div className="user-list-page">
           <Header/>
           <h2>Favoris<span>❤️</span></h2>
           <div className="result">
            {listData.length > 0 ? (listData.map((movie) => {
                return (<Card mov={movie} key={movie.id}/>)
            })) : <h1>No favorites for the moment...</h1>}
           </div>
        </div>
    );
};

export default UserList;