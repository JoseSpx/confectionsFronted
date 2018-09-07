const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/confectionsFrontend'));
app.get('/*', function(req, res) {
    res.sendFile("index.html", {"root": __dirname + "/dist/confectionsFrontend"});
});
app.listen(process.env.PORT || 8080);
