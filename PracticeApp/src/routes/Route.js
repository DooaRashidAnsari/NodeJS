const express = require('express')
const router = express.Router()
const {authenticateToken} = require('../services/auth')

const user = require('../controllers/user')

//router.get('/user/:userId',authenticateToken, user.getUser)
router.get('/user/:userId', user.getUser)
//router.post('/userInfo',auth ,registerUser)

module.exports = router