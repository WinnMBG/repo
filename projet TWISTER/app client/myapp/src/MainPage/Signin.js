import React, {Component} from 'react';
import './Signin.css'
import axios from 'axios';

class Signin extends Component{

    constructor(props){
        super(props);
        this.input = React.createRef();
        this.input2 = React.createRef();
        this.input3 = React.createRef();
        this.input4 = React.createRef();
        this.input5 = React.createRef();
        this.input6 = React.createRef();
    }

    connect = () => {
        axios.put('http://localhost:4000/api/create/user',{
            login: this.input4.current.value,
            password: "",
            lastname: this.input2.current.value,
            firstname: this.input.current.value,
            mail: this.input6.current.value,
            birthday: this.input5.current.value
        },{withCredentials : true})
        this.props.con();
    }
    
    render(){
        return(
        <div className='signin'>
                <h1 className='title'>Inscription</h1>
                <form className='formSign'>
                    <div className="name">
                        <label for="n">Name</label>
                        <input type="text" id="n" ref={this.input}/>
                    </div>
                    <div className="last-name">
                        <label for="ln">Last Name</label>
                        <input type="text" id="ln" ref={this.input2}/>
                    </div>
                    <div className="Age">
                        <label for="age">Age</label>
                        <input type="text" id="age" ref={this.input3}/>
                    </div>
                    <div className="UserID">
                        <label for="ID">UserID</label>
                        <input type="text" id="ID" ref={this.input4}/>
                    </div>
                    <div className="BirthDay">
                        <label for="bthd">Date de naissance</label>
                        <input type="text" id="bthd" ref={this.input5}/>
                    </div>
                    <div className="Mail">
                        <label for="mail">Mail</label>
                        <input type="text" id="mail" ref={this.input6}/>
                    </div>
                    <div className='buttn'>
                        <button onClick={this.connect}>S'incrire</button>
                    </div>
                </form>
        </div>
        )
    }
}

export default Signin;