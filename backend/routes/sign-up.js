const express = require('express')
const Router = express.Router()
const User = require('../db/models/User')

Router.post('/', async (req, res) => {
    const {username, email, password} = req.body
    try {
        // Check if username is empty
        const USERNAME = await User.findOne({where: {"username": `${username}`}})
        // if username taken, alert to the user
        if (USERNAME) return res.send({message: 'Username is taken!'})
        //Create a user after validating
        const user = await User.create({username, email, password})
        //If user created, alert the user, else alert the user that something went wrong.
        user ? res.send({message: 'OK'}) : res.send({message: 'Something went wrong while creating a user'})

    } catch (err) {
        console.log(err);
        res.send({msg: `Error: ${err}`})
    }
})

module.exports = Router