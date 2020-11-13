const db = require("../models/db");
const User = db.users;
const {generateToken} = require('../services/auth')

module.exports.getUser = async (req, res) => {
    const cnic = req.params.cnic
     try {
      const user = await User.findAll({
        where: {
        CNIC: cnic
        }
       }
      )
      console.log('found user'+JSON.stringify(user));
      var token = await generateToken(user[0].CNIC)
      res.json({ user , token: token})
    } catch(error) {
      console.error(error)
    }   
}

module.exports.registerUser = async (req, res) => {
    try {
      const newUser = new User(req.body)
      await newUser.save();
  
      res.json({ user: newUser })
    } catch(error) {
      console.error(error)
    }
}

  