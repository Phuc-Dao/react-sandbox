
const express = require('express');
const app = express();

/*These are various methods that we will work with in express
app.get()
app.post()
app.put()
app.delete
*/
//This the path to the home directory
app.get('/', (req , res) => {
   throw new Error("broken");
    res.send("hello world"); 
});

app.listen(3000) , function(){
    console.log("The port is listening on 30000");
};