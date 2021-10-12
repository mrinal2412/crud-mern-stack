const mongoose=require('mongoose')
const express = require('express')
var bodyParser = require('body-parser')
const {MongoClient} = require('mongodb');

const app = express()
const port = 8080
app.use(bodyParser.urlencoded({ extended: false}))


app.use(bodyParser.json())
mongoose.connect('mongodb+srv://mrinal:abcd1234@cluster0.uia09.mongodb.net/userdb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/blah",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body.name);
    console.log(email);
    console.log(password);
    var data = {
        "name": name,
        "email":email,
        "password":password,
    }
    db.collection('cluster0').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
    res.send("jfksd")
})

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })