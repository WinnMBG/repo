const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../src/app.js'); // c'est l'app "express"
const mocha = require('mocha');

// Configurer chai
chai.use(chaiHttp);
chai.should();

mocha.describe("Test de l'API des amis", () => {
    mocha.it("amis", (done) => {
        const request = chai.request(app.default).keepOpen();
        const user = {
            userid: 1,
            username:"pikachu",
            friends: {}
        }

        const user2 = {
            userid:1,
            username: "pedro de la mancha",
            friends:{}
        }

        request
            .post('/apif/friends/add')
            .send(message)
            .then((res) => {
                res.should.have.status(201);
                console.log(res);
                console.log('Message send !');
            }).then(() => done(), (err) => done(err))
            .finally(() =>{
                request.close()
            })
    });
})