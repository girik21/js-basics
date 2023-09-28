// importing basic stuffs
const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const alive = require("./routes/alive");
const getDevice = require("./routes/get-device");
const getUser = require("./routes/getuser");


// basic port and console message
const localhost = '127.0.0.1';
const port = 8080;
const message = `The server is running on https://${localhost}:${port}`

//import the certifications to run the https
const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

// create server
const server = https.createServer(httpsOptions, app);

//use express and routes that we created
app.use(express.json());
app.use('/alive', alive);
app.use('/get-device', getDevice);
app.use('/getuser', getUser);

//simple get
app.get("/", (req, res) => {
    res.send({
        message: "This is the main index page:",
        paths: "Use the routes below to navigate",
        alive: "/alive",
        getDevice: "/get-device",
        getUser: "/getuser"
    })
})

server.listen(port, () => {
    console.log(message);
})