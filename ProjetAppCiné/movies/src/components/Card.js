import React from "react";

const Card = ({ mov }) => {
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd,mm,yy].join("/");
    };

    const genreFinder = () => {
        let genres = [];
        for (let i = 0; i < mov.genre_ids.length; i++){
            switch (mov.genre_ids[i]){
                case 28:
                    genres.push('Action');
                    break;
                case 12:
                    genres.push('Aventure');
                    break;
                case 16:
                    genres.push('Animation');
                    break;
                case 35:
                    genres.push('Comedie');
                    break;
                case 80:
                    genres.push('Policier');
                    break;
                case 18:
                    genres.push('Drame');
                    break;
                case 10751:
                    genres.push('Famille');
                    break;
                case 14:
                    genres.push('Fantasy');
                    break;
                case 36:
                    genres.push('Histoire');
                    break;
                case 27:
                    genres.push('Horreur');
                    break;
                case 10402:
                    genres.push('Musique');
                    break;
                case 9648:
                    genres.push('Mystère');
                    break;
                case 10749:
                    genres.push('Romance');
                    break;
                case 878:
                    genres.push('Sci-Fi');
                    break;
                case 10770:
                    genres.push('Téléfilm');
                    break;
                case 53:
                    genres.push('Thriller');
                    break;
                case 10752:
                    genres.push('Guerre');
                    break;
                case 37:
                    genres.push('Western');
                    break;
                default:
                    break;
            }
        }
        return genres.map((genre) => <li key={genre}>{genre}</li>)
    }

    const addStorage = () => {
       let storedDatas = (window.localStorage.movies ? window.localStorage.movies.split(",") : []) ;
       
       if(!(storedDatas.includes(mov.id.toString()))){
            storedDatas.push(mov.id);
            window.localStorage.movies = storedDatas;
       }
    };

    const deleteStorage = () => {
        let stored = window.localStorage.movies.split(",");
        let newData = stored.filter((id) => id != mov.id)
        window.localStorage.movies = newData;
    };

    return(
        <div className="card">
            <img src={mov.poster_path ? "https://image.tmdb.org/t/p/w500" + mov.poster_path : "./img/poster.jpg"} alt="affiche film"/>
            <h2>{mov.title}</h2>
            {mov.release_date ? (
                <h5>Sorti le : {dateFormater(mov.release_date)}</h5>
            ) : "No Date Bro!"}
            <h4>{mov.vote_average}/10 <span>⭐</span></h4>
            <ul>
                {mov.genre_ids ? genreFinder() : mov.genres.map((genre) => {
                    return <li>{genre.name}</li>
                })}
            </ul>
            {mov.overview ? <h3>Synopsis</h3> : ""}
            <p>{mov.overview}</p>
            {mov.genre_ids ? 
            (<div className="btn" onClick={() => addStorage()}>
                Ajouter aux favoris
            </div>) : 
            <div className="btn" onClick={() => {deleteStorage(); window.location.reload();}}>Supprimer de la liste</div>}
        </div>
    );
}

export default Card;