import React, {useEffect, useState} from "react";
import ListFriends from '../Friends/ListFriends.js';
import User from '../Friends/User';
const ProfilPage = () => {

    //Nb de personnes suivies
    const [followed, follow] = useState(0);

    return(
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"
        }}>
            <div>
                <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
                src="https://i.pinimg.com/474x/d1/05/cb/d105cbd7ceed31dac497dfc1b2e35a15.jpg"/>
            </div>
            <div>
                <h3 style={{color:"white", fontSize:"2em"}}>WiNZEr77</h3>
                <div>
                    <h5 style={{color:"white", fontSize: "1em"}}>{followed} Amis</h5>
                    <button onClick={() => follow(followed + 1)}> Follow </button>
                </div>
            </div>
            <div>
                <h1 style={{color:"red"}}>Liste d'amis:</h1>
                <ListFriends/>
            </div>
        </div>
    )

}

export default ProfilPage;