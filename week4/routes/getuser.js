const express = require("express");

const getUser = express.Router();

getUser.post("/", (req, res) => {
    const userData = req.body.userData;
    res.send(userData);
});

getUser.use(express.json());

module.exports = getUser;