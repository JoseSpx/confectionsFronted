//Install express server
const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/confections-frontend'));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname));
});

// Start the app by listening on the default Heroku port
const server = http.createServer(app)
server.listen(port,() => console.log('Running'));