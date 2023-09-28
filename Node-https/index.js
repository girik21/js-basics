//Import required elements to create https 
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const startUp = require('./routes/startup');

// Configure the hostname and port number
const hostname = '127.0.0.1';
const port = 8080;
const message = `Service hosted on https://${hostname}:${port}/`

// Install and import necessary login credentials using fileSync
const httpOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync("cert.pem")
}

const server = https.createServer(httpOptions, app);

app.use(express.json());
app.use('/', startUp)

server.listen(port, () => {
    console.log(message);
});



