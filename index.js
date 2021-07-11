const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 5000;
const hostname = '0.0.0.0';
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true }));

app.get("/",function (req,res){

    return res.render('home',{
        dog_age : ' '
    });
});

app.post("/see",function(req,res){
        
    var age = Number(req.body.n1) /15;
    res.render('home',{
    dog_age : age
    });

});
app.post("/reset",function(req,res){
        
    var age = ' ';
    res.render('home',{
    dog_age : age
    });

   
});

app.listen(port,hostname,function(err){
    if(err){console.log('Error in running the server', err);}
    console.log('Server is running on port :',port);
});
