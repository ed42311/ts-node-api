const express = require('express');
const helmet = require("helmet");
const health = require('./routes/health'); // This comes from ./routes/health.js
const product = require('./routes/product');

// Instantiating the app
const app = express();

// Set the port
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

// Middlewares
app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${Date.now()}`)
    next()
})

app.use('/health', health) // This is where it gets attached
app.use('/product', product)

// Here is where we want to break out our routes
app.get('/hello/:name', (req, res) => {
    res.json({message: `Hello ${req.params.name}`})
})

app.listen(port, () => {
    console.log('Server running on port: ' + port);
})
// werw
