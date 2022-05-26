const path = require('path');
const api = require('./api.js');
const Datastore = require('nedb');
const cors = require('cors');

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

//Création de la database pour les utilisateurs
const db_users = new Datastore('database_users.db');
//Création de la database pour les messages
const db_messages = new Datastore('database_messages.db');
//Création de la database pour les amis
const db_friends = new Datastore('database_users.db');
express = require('express');
const app = express();

//Définitions des api correspondant aux différents services
api_2 = require("./apimessages.js")
//api_3 = require("./apifriends.js")

const session = require("express-session");

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(session({
    secret: "technoweb rocks"
}));

//Définitions des routes 
app.use('/api', api.default(db_users));
app.use('/apim/messages', api_2.default(db_messages));
//app.use('/apif/friends', api_3.default(db_friends));

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;

