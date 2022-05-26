const { resolve } = require("path");

class Messages {
    constructor(db) {
      this.db = db
      db.loadDatabase();
    }

    envoi(userid, username, date, text, nbSign){
      return new Promise((resolve, reject) => {
      this.db.insert({userid: userid, 
        username: username, date: date, text: text, nbSign: nbSign})
      this.db.find({text:text}, function(err, output){
        if(err){
          reject("Envoi échoué !")
        }
        else{
          console.log(output);
          let msg_status = "Message dans la BD !"
          resolve(msg_status);
        }
      })
      });
    }

    getMessages(username){
      return new Promise((resolve, reject) => {
        this.db.find({}, function(err, output){
          if(err){
            reject("Aucun message trouvé !");
          }
          else{
            let tab = []
            let nbMsg = output.length
            for(let i = 0; i<nbMsg; i++){
              if(output[i].username === username){
                tab.push(output[i])
              }  
            }
            console.log(tab)
            resolve(tab);
          }
        });
      });
    }

    get(){
      return new Promise((resolve, reject) => {
        this.db.find({}, function(err, output){
          if(err){
            reject("Aucun message trouvé !");
          }
          else{
            resolve(output);
          }
        });
      });
    }

    setFake(username,text){
      return new Promise((resolve, reject) => {
        this.db.update({username: username, text:text}, {$set:{nbSign:nbSign+1}}, function(err,num){
          if(err){
            reject("Message absent !")
          }
          resolve("Signalement effectué")
        })
      })
    }

    deleteFake(){
      return new Promise((resolve, reject) => {
        this.db.find({}, function(err, output){
          if(err){
            reject("Aucun message trouvé !");
          }
          else{
            let nbMess = output.length
            for(let i = 0; i<nbMess; i++){
              if(output[i].nbSign >= 10){
                this.db.remove(output[i])
                resolve("Message retiré de la base !")
              }  
            }
          }
        });
      })
    }

    deleteM(username){
      return new Promise((resolve, reject) => {
        this.db.remove({username},{multi: true}, function(err,numD){
          if(err){
            reject("Paramètres manquants !");
          }
          resolve("Messages supprimés");
        })
      })
    }
}
exports.default = Messages