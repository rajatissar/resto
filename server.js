const express = require('express');

const app = express();
const PORT = process.env.PORT || 8081;

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/resto/' });
});

// Start the app by listening on the default
app.listen(PORT, () => {
    console.log(`Server running on ${PORT} PORT`);
});
