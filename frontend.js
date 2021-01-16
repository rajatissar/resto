const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist/resto'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/resto/index.html'));
});

// Start the app by listening on the default
app.listen(PORT, () => {
    console.log(`Server running on ${PORT} PORT`);
});
