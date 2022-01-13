const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const useraccounts = require('./routes/api/useraccounts');
const app = express();
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(()=>console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

//use api
app.use('/api/useraccounts',useraccounts);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server started on port ${port}`));

