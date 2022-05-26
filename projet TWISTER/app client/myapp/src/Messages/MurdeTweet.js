import ListMessage from "./ListMessage";
import React from "react";
import './MurdeTweet.css'

//Contient le mur de tweet du site (donc afficher la liste des message de tout le site)

class MurdeTweet extends React.Component{

    constructor(props){
        super(props);
        this.state = {nb: 0};
    }

    componentDidUpdate(){
        this.state.nb+=1 
    }

    render(){
        return(
            <div className='MurDeTweet'>
                <ListMessage c={this.props.connect}/>
            </div>
        );
    }
}

export default MurdeTweet;