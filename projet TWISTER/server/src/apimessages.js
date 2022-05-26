const express = require("express");
const Messages = require("./entities/messages.js");

function init(db){
    const router = express.Router();

    router.use(express.json());
    router.use((req, res, next) => {
        console.log('API: method %s, path %s', req.method, req.path);
        console.log('Body', req.body);
        next();
    });
    const messages = new Messages.default(db);

    //Ajout de messages dans la BD du serveur
    router.post('/post', async (req,res) => {
        try{
            const {userid, username, date, text, nbSign} = req.body;
            if(!text || !username || !date || !userid){
                res.status(400).json({
                    status: 400,
                    msg: "Paramètres manquants, le message ne peut être envoyé"
                });
                return;
            }
            else{
                messages.envoi(userid, username, date, text, 0)
                .then((msg_status) => res.status(201).send({msg_st : msg_status}))
                .catch((err) => res.status(500).send(err));
            }
        }
        catch (e) {
            // Toute autre erreur
            res.status(500).json({
                status: 500,
                message: "erreur interne",
                details: (e || "Erreur inconnue").toString()
            });
        }
    })

    //Obtenir l'ensemble des messages envoyés par un user
    //Penser à essayyer avec async devant la methode dans le fichier messages
    router.route('/get/:username')
          .get(//async
            (req, res) => {
            messages.getMessages(req.params.username)
                    .then((tab) => res.status(200).send({messages : tab}))
                    .catch((msgerr) => res.status(500).send(msgerr))
                });

    //Obtenir l'ensemble des messages du site
    router.route('/all')
          .get( (req, res) => {
            messages.get()
                    .then((tab) => res.status(200).send({Allmessages : tab}))
                    .catch((msgerr) => res.status(500).send(msgerr))
                });

    //Signaler un message comme fakenews
    router.route('/fake/:username/:text')
          .put((req, res) => {
              messages.setFake(req.params.username, req.params.text)
                      .then((resp) => res.status(200).send({m : resp}))
                      .catch((eror) => res.status(500).send({m : eror}));
          })

    //Supprimer un message qui a eu plus de 10 signalements
    router.delete('/fake/delete', (req,res) => {
            messages.deleteFake()
                    .then((resp) => res.status(200).send({m : resp}))
                    .catch((eror) => res.status(500).send({m : eror}));
    });

    //Supprimer les messages envoyés par un user           
    router.delete('/del/:username', (req, res) => {
       messages.deleteM(req.params.username)
               .then((resp) => res.status(200).send({reponse : resp}))
               .catch(() => res.status(500).send("Erreur"))
    })
    return router;
}
exports.default = init;