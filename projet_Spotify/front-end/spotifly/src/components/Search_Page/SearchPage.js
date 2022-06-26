import React from "react";
import './SearchPage.css';
import Search from "../Search/Search.js";

function SearchPage(props){

    document.title = 'Spotifly!';

    return(
        <>
        <header className="App">
          <div className='app_container'>Spotifly !</div>
        </header>
        <Search/>
        </>
    );

}

export default SearchPage;