'use strict';

// # Ghost Startup
// Orchestrates the startup of Ghost when run from command line.

var ghost = require('./ghost/core');
var express = require('express');


var blog = ghost();
var app = express();

/*
app.use('/', function (req, res) {
    console.log("TESTTT");
    res.end('Hello, World!');
});

app.use(function(req, res, next) {
    if(req.url.startsWith('/blog/')){
        next();
        return;
    }
    res.status(400);
    res.send('404: File Not Found');
});
*/

blog.then(function (ghostServer) {
    // Mount our Ghost instance on our desired subdirectory path if it exists.
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    // Let Ghost handle starting our server instance.
    ghostServer.start(app);
}).catch(function (err) {
    errors.logErrorAndExit(err, err.context, err.help);
});


// handles your app
/*https.createServer(lex.httpsOptions, lex.middleware(app)).listen(443, function () {    console.log("Listening for ACME tls-sni-01 challenges and serve app on", this.address());
});*/

