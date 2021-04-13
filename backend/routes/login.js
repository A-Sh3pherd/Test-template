const express = require('express')
const Router = express.Router()
const User = require('../db/models/User')

Router.post('/', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({
        where: {
            "username": `${username}`,
            "password": `${password}`
        }})
    user ? res.send({message: 'OK'}) : res.send({message: 'Username or Password are incorrect.'})
})

module.exports = Router


