//Install express server
const express = require('express');
const app = express();
//directory
// Serve only the static files form the dist directory
app.get('/*all', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);