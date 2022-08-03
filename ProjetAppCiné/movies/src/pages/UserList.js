import axios from "axios";
import React, { useEffect, useState } from "react";
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
        <div>
           <Header/>
           <h2>Favoris<span>❤️</span></h2>
           <div className="result">

           </div>
        </div>
    );
};

export default UserList;