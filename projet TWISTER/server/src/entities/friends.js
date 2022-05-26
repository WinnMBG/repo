const { resolve } = require("path")

class Friends {
    constructor(db) {
      this.db = db
      db.loadDatabase()
      // suite plus tard avec la BD
    }

  add(username){
    return new Promise((resolve, reject) => {
      //Mettre requête de la DB
      this.db.update({$push : {friends: username}})
      this.db.find({friends: username}, function(err, output){
        if(err){
          console.log(err)
          reject(err)
        }
        else{
          resolve("Ami ajouté !")
        }
      })
    });
  }

  delete(userid){
    return new Promise((resolve, reject) => {
      //requête de la db
      if(true){}
    });
  }
}

exports.default = Friends;