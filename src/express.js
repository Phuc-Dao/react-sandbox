var things = require('./things.js'); //require things from things.js
const express = require('express');
bodyParser = require('body-parser');
var path = require('path');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

 
//Template engine used to render html and css code. Boiler plate code for setting up middleware for view engine
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))

let objItem = {
    name: "john",
    age: 40,
    occupation: "doctor"
}

//Hello world gets overwridden by whatever is in the html file if you use boilerplate
app.get('/' , function(req , res){
    //res.send('Hello world'); //You can send strings
    //res.json(objItem); //You can send json objects 
    res.render('index' , { //Takes the ejs file as first parameter, and object as optional second parameter if you want
        titles: 'The data has been inserted' //TO pass anything inside the html file. Whatever is in the index file
     }) //to get access to the variables you need to wrap them in <% = titles %>
})

//commiting on the react application
app.listen(3000 , function(){
    console.log('listening on port 3000...');
});