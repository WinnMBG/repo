import React, {Component} from 'react';
import NavigationPanel from '../Navbar/NavigationPanel.js';
import Hello from './Hello.js';
import Login from '../Navbar/Login'
import Signin from './Signin.js';
import Footer from './Footer.js'
import ProfilPage from '../Profil/ProfilPage.js';
import MurdeTweet from '../Messages/MurdeTweet';
import Search from '../Navbar/Search.js';
import './Mainpage.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {connected: false, page:"connexion"};
        this.setConnected = this.setConnected.bind(this);
        this.setLogout = this.setLogout.bind(this);
        this.setSignin = this.setSignin.bind(this);
        //this.addMessage = this.addMessage.bind(this);
    }

    componentDidMount(){
        document.title = 'Ohayo Gozaimasu!';
    }

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps :\n", prevProps);
        console.log("prevState :\n", prevState);
        if(this.state.connected){  
            (document.title = 'Ohayoo NakamaDaaa!');
        }
        else{
            document.title = 'Ohayo Gozaimasu!';
        }
    }
  
    setConnected(){
        //console.log(123);
        this.setState({connected: true, page: "accueil"}, console.log("user connected !"))
    }

    setLogout(){
       this.setState({connected: false, page: "connexion"})
    }

    setSignin(){
        this.setState({connected: false, page: "inscription"}, console.log("createaccount"))
    }

    setProfil(){
        this.setState({ connected: true, page: "profil"}, console.log("page de profile"))
    }

    render(){
    
        return (<div className="MainPage">
            <Router>
            <NavigationPanel connected={this.state.connected} login={this.getConnected} logout={this.setLogout}/>
                <Routes>
                    <Route path='/' element={<Hello/>}/>
                    <Route path='/login' element={(this.state.connected === false) && <Login setlog={this.setConnected}/>}/>
                    <Route path='/create' element={(this.state.connected === false) && <Signin con={this.setConnected}/>}/>
                    <Route path="/login/profile" element={(this.state.connected) && <ProfilPage/>}/>
                </Routes>
            </Router>
                {this.state.connected && (<MurdeTweet connect={this.state.connected}/>)}
                {this.state.connected && (<Footer/>)}
            </div>
            ); 

    }
}

export default MainPage;