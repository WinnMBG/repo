import React from 'react';
import './Mesages.css'
import Signalement from './Signalement';


//Fonction pour générer un message
function Message(props){
    var date = new Date();
    return (
      <div className="Message">
        <div className="Username">
          {props.username}
        </div>
        <div className="Message-Text">
          {props.text}
        </div>
        <div className="Message-Date">
          {date.toLocaleDateString()}
        </div>
        <Signalement username={props.username} text={props.text}/>
      </div>
    );
  }
  export default Message;