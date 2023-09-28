const express = require("express");


const startUp = express.Router();
startUp.get('/', (req, res) => {
    res.send('It Works!');
});

startUp.get('/shovam/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    res.send(id)

});

startUp.post('/sfbu', (req, res) => {
    const studentName = req.body.studentName;
    res.send({ studentName });
})


startUp.get('/live', (req, res) => {
    res.send('Its alive');
});


startUp.get('/startup', (req, res) => {
    res.send('Web Service has started!');
});


startUp.get("/get-device", (req, res) => {
    const userDevice = req.header("User-Agent");
    res.send({ userDevice });
});

startUp.get("/ipAd", (req, res) => {
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send({ userIp });
})

module.exports = startUp;