let express = require('express');
let server = express();

server.get('/', function (req, res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>hello world');
});

server.listen(3000, function() {
    console.log('j\'écoute');
}) 