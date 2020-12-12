const express = require('express')
const router = express.Router()
const {authenticateToken} = require('../services/auth')

const user = require('../controllers/user')
const todo = require('../controllers/todo')

router.get('/user/:cnic', user.getUser)
router.post('/registerUser' , user.registerUser)
router.post('/updateUser' , authenticateToken , user.updateUser)
router.post('/createTodoFile',authenticateToken,todo.createToDo)
router.post('/addTodo',authenticateToken,todo.addToDo)

module.exports = router