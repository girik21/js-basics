//Import required elements to create https 
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// Configure the hostname and port number
const hostname = '127.0.0.1';
const port = 8080;
const message = `Service hosted on https://${hostname}:${port}/`

// Install and import necessary login credentials using fileSync
const httpOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync("cert.pem")
}

// Finally create a server
const server = https.createServer(httpOptions, app);

// GET for Homepage
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send('HomePage');
});

// GET for Live
app.get('/live', (req, res) => {
    res.send('Web Service is Live');
});

// GET for StartUp
app.get('/startup', (req, res) => {
    res.send('Startup Initiated');
});

// GET for Winter
app.get('/winter', (req, res) => {
    res.send('Winter is Coming!')
});

// GET Route with custom headers
app.get('/set-header', (req, res) => {
    // Set custom response headers
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Custom-Header', 'Hello from GET route');

    // Send a JSON response
    res.send({ message: 'This is a GET request' });
});

server.listen(port, () => {
    console.log(message);
});
