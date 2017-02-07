// # Ghost Startup
// Orchestrates the startup of Ghost when run from command line.

var ghost = require('./ghost/core');
var express = require('express');

// Make sure dependencies are installed and file system permissions are correct.
require('./ghost/core/server/utils/startup-check').check();

var blog = ghost();
var app = express();

app.get('/', function(req, res) {
    console.log("home");
    res.send('Homepage');
});

app.use(function(req, res, next) {
    if(req.url.startsWith('/blog/')){
        next();
        return;
    }
    res.status(400);
    res.send('404: File Not Found');
});

blog.then(function (ghostServer) {
    // Mount our Ghost instance on our desired subdirectory path if it exists.
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    // Let Ghost handle starting our server instance.
    ghostServer.start(app);
}).catch(function (err) {
    errors.logErrorAndExit(err, err.context, err.help);
});
