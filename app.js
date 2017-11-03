const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')

const app = express(); 

const users = require('./routes/users')

// Port number
const port = 3000;

app.use(cors()); // allows access from public endpoints

// Body Parser Middleware
app.use(bodyParser.json())

app.use('/users', users)

// Index route
app.get("/", (req, res) => {
    console.log("initial get");
    res.send('Invalid Endpoint.')
})

// Start server
app.listen(port, () => {
    console.log('Listening on port ' +port);
});
 

