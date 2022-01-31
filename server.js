const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const useraccounts = require('./routes/api/useraccounts');
const comments = require('./routes/api/comments');
const app = express();
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(()=>console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

//use api
app.use('/api/useraccounts',useraccounts);
app.use('/api/comments',comments);

const port = process.env.PORT || 5000;

app.get("/",function(req,res){
    res.json({message:"Greetings from the server"});
})

app.listen(port, ()=>console.log(`server started on port ${port}`));

