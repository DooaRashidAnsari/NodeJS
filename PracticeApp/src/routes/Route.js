const express = require('express')
const router = express.Router()
const {authenticateToken} = require('../services/auth')

const user = require('../controllers/user')

//router.get('/user/:userId',authenticateToken, user.getUser)
router.get('/user/:cnic', user.getUser)
router.post('/registerUser' , user.registerUser)

module.exports = router