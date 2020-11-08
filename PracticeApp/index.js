const express = require('express')
const Sequelize = require('sequelize')
const jwt = require("jsonwebtoken");



const app = express()
const port = 3000
app.use(express.json());
const sequelize = new Sequelize('postgres://localhost:5432/mydatabasename')

//db connection
sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});
app.get('/', (req, res) => res.json({ message: 'Hello World' }))




// get user
app.get('/user/:userId', async (req, res) => {
const userId = req.params.userId
try {
const user = await User.findAll({
where: {
id: userId
}
}
)
res.json({ user })
} catch(error) {
console.error(error)
}
})

// save user

app.post('/userInfo', async (req, res) => {
    try {
    const newUser = new UserInfo(req.body)
    await newUser.save();
  
    res.json({ user: newUser }) // Returns the new user that is created in the database
    } catch(error) {
    console.error(error)
    }
    })
    

app.listen(port, () => console.log(`Example app listening on port ${port}!`))