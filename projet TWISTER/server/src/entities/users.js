const { resolve } = require("path");

class Users {
  constructor(db) {
    this.db = db;
    db.loadDatabase();
  }

  create(login, password, lastname, firstname, mail, birthday) {
    return new Promise((resolve, reject) => { 
      //Insertion dans la database
      this.db.insert({login: login, password: password, lastname:lastname, firstname: firstname,
      mail: mail, birthday: birthday});
      //Création de l'userid à partir du nb de users dans la base
      let userid = 0
      this.db.find({},function(err,output){
          if(err){
            reject("erreur")
          }
          userid = output.length++;
          //Réponse du serveur, renvoie l'userid
          resolve(userid);
      });   
    });
  }

  get(userid) {
    return new Promise((resolve, reject) => {
      // À remplacer par une requête bd
      this.db.find({}, function(err,output){
        if(err) {
          //erreur
          console.log(err)
          reject("Don't exists !");
        } else {
          resolve(output[userid-1]);
        }
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      // À remplacer par une requête bd
      this.db.find({}, function(err,output){
        if(err) {
          //erreur
          console.log(err)
          reject("Don't exists !");
        } else {
          resolve(output);
        }
      });
    });
  }

  async exists(login) {
    return new Promise((resolve, reject) => {
      this.db.find({}, function(err, output){
        if(err) {
          //erreur pas d'user existant
          reject("Doesn't exists !");
        } else {
          let nbUsers = output.length;
          for(let i = 0; i<nbUsers; i++){
            if(output[i].login === login){
              resolve(true)
            }     
          }
          resolve(false);
        }
      });    
    });
  }

  checkpassword(login, password) {
    return new Promise((resolve, reject) => {
      /*let userid = 1;*/ // À remplacer par une requête bd
      this.db.find({}, function(err,output){
        if(err) {
          //erreur
          reject("Wrong IDs !");
        } else {
          let nbUsers = output.length;
          for(let i = 0; i<nbUsers; i++){
            if(output[i].login === login && output[i].password === password){
              resolve(i);
            }
          }
          resolve(null);
        }
      });
    });
  }

  deleteUser(username){
    return new Promise((resolve, reject) => {
      this.db.remove({username}, function(err){
        if(err)
          reject("problem User !")
        resolve(`${username} supprimé !`)
      })
    });
    }
}

exports.default = Users;

