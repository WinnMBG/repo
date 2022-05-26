import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import ProfilePage from './Profil/ProfilPage';
import * as serviceWorker from './serviceWorker';
//import MurdeTweet from './Messages/MurdeTweet';
import MainPage from './MainPage/MainPage';

ReactDOM.render(<MainPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
