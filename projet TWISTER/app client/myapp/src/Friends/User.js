import ListMessage from "../Messages/ListMessage";
import ListFriends from "./ListFriends";
import React from 'react';

//Sert à afficher les infos de l'user sur le bandeau de la page d'acceuil
const User = () => {
    var nom = document.getElementById("namae");
    return(
        <header>
            <div className="usr">
                Irashaimaseee aniki !
            </div>
        </header>
    );
}
export default User;