import React , {Component} from 'react';
import './FormAddMsg.css'

class FormAddMessage extends Component{

        constructor(props){
            super(props);
            this.input = React.createRef();
            this.send = this.send.bind(this);
        }


        ajout = (valeur) => {
            this.props.addmsg(valeur);
        }

        send(){
            let value=this.input.current.value;
            value=value.trim();
            if(value==='')return;
            this.ajout(value);
            this.input.current.value ='';
        }

        render(){
        return(
            <form className='AjtMsg'>
                <label className='l' htmlFor='msg'>Message</label>
                    <input type='textarea' id='msg' placeholder='Un petit message mon nakama...' ref={this.input}/>
                <button className='send' onClick={this.send}>Publier</button>
            </form>
        );
        }
}
export default FormAddMessage;