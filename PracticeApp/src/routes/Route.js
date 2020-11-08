const express = require('express')
const router = express.Router()
const {auth} = require('../services/auth')

const {getUser,registerUser} = require('../controllers/user')

router.get('/user/:userId',auth, getUser)
router.post('/userInfo',auth ,registerUser)

module.exports = router