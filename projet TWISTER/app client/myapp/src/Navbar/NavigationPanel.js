import React, {Component} from 'react';
import Logout from './Logout.js'
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from './dragon.png'
import Search from './Search.js';

class NavigationPanel extends Component{

    componentDidUpdate(){
        //document.title = "Hōmupēji";
    }

    render(){
        return (<header>
        <nav className="NavigationPanel">
            <ul className="liste">
                <div className='logo'>
                    <img style={{width: '40px', height:'40px'}} src={Logo}/>
                </div>
                <span>NakamaaaTweets!</span>
                <li className="items">
                    {this.props.connected === false && <Link to="/login" style={{color: 'white',  textDecoration: 'none', borderRadius: '30px', backgroundColor: 'red'}}>Sign up</Link>}
                </li>
                <li className='items'>
                    {this.props.connected === false && <Link to="/create" style={{color: 'white', textDecoration: 'none', borderRadius: '30px',  backgroundColor: 'red'}}>Sign in</Link>}
                </li>
                <li className='items'>
                    {this.props.connected && (<Search/>)}
                </li>
                <li className='items'>
                    {this.props.connected === true && (<Logout setlogu={this.props.logout}/>)}
                </li>
                <li className='items'>
                    {this.props.connected === true && <Link to="/login/profile" style={{color: 'white',  textDecoration: 'none', backgroundColor: 'red',  borderRadius: '20%'}}>Mon profil</Link>}
                </li>
            </ul>
        </nav>
        </header>)
    }

}

export default NavigationPanel