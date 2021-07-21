const express = require('express');

// Instantiating the app
const app = express();

// Set the port
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({message: "OK"})
})

app.get('/hello/:name', (req, res) => {
    res.json({message: `Hello ${req.params.name}`})
})

app.listen(port, () => {
    console.log('Server running on port: ' + port);
})
