// Packages
require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3005
const db = require('./db/dbConnection')
//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Routes
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/sign-up')
//Server
app.use('/login', loginRoute)

app.use('/signup', signupRoute)

//Loading Server And Database
app.listen(port, () => {
    db.authenticate()
        .then(() => {
            console.log(`Server is up on port ${port} and ...`)
            console.log('Db connected...')
        }).catch(err => console.log(err))
})
