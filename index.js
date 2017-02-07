// # Ghost Startup
// Orchestrates the startup of Ghost when run from command line.

var ghost = require('./ghost/core');
var express = require('express');

var blog = ghost();
var app = express();

// Make sure dependencies are installed and file system permissions are correct.
require('./ghost/core/server/utils/startup-check').check();

app.get('/', function(req, res) {
    res.send('Homepage');
});

blog.then(function (ghostServer) {
    // Mount our Ghost instance on our desired subdirectory path if it exists.
    app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);

    // Let Ghost handle starting our server instance.
    ghostServer.start(app);
});

app.listen(80);
