const express = require("express");
const bodyParser = require('body-parser');
const port = 8000;
// create express app
const app = express();

// db config
const db = require("./config/mongoose");


// parse requests of content type
app.use(bodyParser.urlencoded({extended: true}));
// parse request of content-type
app.use(bodyParser.json());


// Defining a simple route
app.get('/', (req, res) => {
    res.json({"message": "welcome guys" });
});


// Listen for requests
app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})