const express = require("express");

const alive = express.Router();

alive.get("/", (req, res) => {
    res.send({
        message: "Oh, I, oh I'm still alive Hey, I, oh I'm still alive Hey, I, oh I'm still alive Hey, oh"
    })
})

module.exports = alive;