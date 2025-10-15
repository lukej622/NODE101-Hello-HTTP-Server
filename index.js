// write your code here
const express = require('express');

// Use the PORT environment variable if available, otherwise default to 8080.
const PORT = process.env.PORT || 8080;


// Creates an instance of express.
const app = express();

// Route handler for requests to /
app.get('/', function (req, res) {
    res.status(200).send('Hello World')
})

// Listen for incoming connections on port 8080.
app.listen(PORT, function () {
    console.log(`Server is listening on localhost:${PORT}`)
})
