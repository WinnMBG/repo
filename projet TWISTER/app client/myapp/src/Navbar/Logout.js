import React, {Component} from 'react';
import './Navbar.css'

class Logout extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("clicked!")
        var reponse = window.confirm("Tu nous quitte deja mon nakama ?")
        if(reponse){
            this.props.setlogu();
        }
        else{
            alert("IKUZOOO !");
        }
        
        
    }
    render(){
        return(
            <button className='boutondeco' onClick={this.handleClick} style={{cursor: 'pointer', float: 'right'}}>Déconnexion</button>
        );
    }
}
export default Logout;