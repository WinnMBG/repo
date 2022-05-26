import React , {Component} from 'react';
import Message from './Message.js';
import FormAddMessage from './FormAddMessage.js';
import './ListMsg.css'
import axios from 'axios';

//return un div contenant une liste de div (les messages) qui seront stockés dans une variable d'état

class ListMessage extends Component{
    constructor(props){
        super(props)
        this.state = {msglist:[]};
        this.add = this.addMessage.bind(this);
    }


    addMessage(msg){
        axios.post('http://localhost:4000/api/msg/post',{message: msg},{withCredentials: true});
        let a = [...this.state.msglist, msg]     
        this.setState({msglist:a}, console.log("message ajouté"));
    }

    render(){
        return(
            <div className='msg-section'>
                <div className="FormAddMsg">
                    <FormAddMessage addmsg={this.add}/>
                </div>
                <div className='ListMessage'>
                    {this.state.msglist.map(item =>{
                        return <Message key={item.toString()} username={'Winzer'} text={item}/>})
                    }
                </div>
            </div>
        )
    }
}
export default ListMessage;