var things = require('./things.js'); //require things from things.js
const express = require('express');
bodyParser = require('body-parser');
path = require('path');
var app = express();

//use app.use to use the entire router. The path is /things
//app.use('/', things);
//Video ends at 23:20
//MiddleWare functions are functions that executes before the get requests
var logger = function(req , res , next){
    console.log("The middleware has been activated");
    next(); //The next function will execute the next middleware
    
}

//second middleware function
var logger2 = function(req , res , next){
    console.log("The middleware number 2 hass been activated");
    next(); //Always include the next function
}

//execute middle ware function by saying app.use. Executes bot these functions when its loaded
app.use(logger , logger2);

//Boiler plate code that renders things in the folder of public
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
*/
let objItem = {
    name: "john",
    age: 40,
    occupation: "doctor"
}

//Hello world gets overwridden by whatever is in the html file if you use boilerplate
app.get('/' , function(req , res){
    res.send('Hello world'); //You can send strings
    res.json(objItem); //You can send json objects
})

//commiting on the react application
app.listen(3000 , function(){
    console.log('listening on port 3000...');
});