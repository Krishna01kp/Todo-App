// Requiring all the required libraries
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const todoRouter = require('./routes/todos');
const app = express();

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
     next();
}); 

app.use(express.urlencoded( {extended: false} ));

app.use('/todos', todoRouter.router);

// call function to connect to DB of given url
connectDB(config.DB_URL).then(() => { listen(config.PORT) });


// function to connect to server for given port 
function listen(PORT) {
    app.listen(PORT, (err) => {
        if(err) {
            console.error("An error occured while trying to start the server.");
            console.error(err);
            return;
        } 
        console.info("Server is up and running.");
    });
}

// function to connect to DB
function connectDB(DB_URL) {
    mongoose.connection.on('error', (err) => {
        console.error("An error occured while trying to connect to DB.");
        console.error(err);
    });

    mongoose.connection.once('open', () => {
        console.info("Successfully connected to DB.");
    });

    return mongoose.connect(DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true });
}
