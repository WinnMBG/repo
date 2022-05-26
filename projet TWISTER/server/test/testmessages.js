const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../src/app.js'); // c'est l'app "express"
const mocha = require('mocha');

// Configurer chai
chai.use(chaiHttp);
chai.should();

mocha.describe("Test de l'API des messages", () => {
    mocha.it("messages", (done) => {
        const request = chai.request(app.default).keepOpen();
        const message = {
            userid: 1,
            username:"pikachu",
            date: "Lundi 09/05/2022",
            text:"Voici le premier message !"
        }

        request
            .post('/apim/messages/post')
            .send(message)
            .then((res) => {
                res.should.have.status(201);
                console.log('Message send !');
               
                    request
                        .get(`apim/messages/get/${message.username}`)
                        .then((res) => {
                            res.should.have.status(201);
                        }),

                    request
                        .get('apim/messages/get/armando')
                        .then((res) => {res.should.have.status(404)}),

                    request
                        .get('apim/messages/all')
                        .then((res) => {res.should.have.status(201)}),
                    
                    request 
                        .delete(`apim/messages/del/${message.username}`)
                        .then((res) => {res.should.have.status(200)})
                
               }).then(() => done(), (err) => done(err))
            .finally(() =>{
                request.close()
            })
    })
})