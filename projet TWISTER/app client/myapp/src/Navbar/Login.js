import axios from 'axios';
import React, {Component} from 'react'
import './style.css'


class Login extends Component{

	constructor(props){
		super(props);
		this.input = React.createRef();
		this.input2 = React.createRef();
	}

	connectionclick = () => {
		axios.post('http://localhost:4000/api/user/login', 
		{login:this.input.current.value, 
		password:this.input2.current.value 
	})
	this.props.setlog()
	/*.then(() => this.props.setlog())
	.catch(() => window.alert("Login/Password incorrects !"))		   
*/}
	

    render(){
        return(<div className='login'>
            <h1 className='titre'> Connexion </h1>
	            <form>
	                <div className='field'>
		                <label htmlFor="prenom" id="namae">Login</label>
		                <input type="text" id="prenom" name="prenom" ref={this.input}/>
	                </div>
	                <div className='field2'>
		                <label htmlFor="pres">Password</label>
		                <input type="password" id="pres" name="password" ref={this.input2}/>
	                </div>
	                <div className='bouton'>
		                <input type="submit" value="Connexion" onClick={this.connectionclick}/>
	                </div>
	            </form>
        </div>);
    }
}

export default Login;