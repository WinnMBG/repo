const express = require("express");
const Friends = require("./entities/friends.js");

function init(db){
    const router = express.Router();

    /*router.use(express.json());
    router.use((req, res, next) => {
        console.log('API: method %s, path %s', req.method, req.path);
        console.log('Body', req.body);
        next();
    });
    const friends = new Friends.default(db);
    router.post('/add', (req, res) => {
        const nom = await friends.get(req.params.username)
        if(!nom){
            res.status(400).json({
                status: 400
                message: "Utilisateur non trouvé dans la base"
            })
            return;
        }
        else{
            friends.add(req.params.username)
        }
    })
    router.get('/friends', async (req, res) =>{
        try{
            const listFriends = await friends.getFriends(req.params.username)
            if(listFriends){
                res.send(200).json({
                    status: 200
                    message: "Ami ajouté !"
                })
            }
        }
        catch(e){
            res.sendStatus(500).send(e)
        }
    // })*/
    return router;
}
exports.default = init;