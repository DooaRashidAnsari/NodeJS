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
      res.json({message: 'User not found'});
    }   
}

module.exports.registerUser = async (req, res) => {
    try {
      const newUser = new User(req.body)
      await newUser.save();
  
      res.json({ user: newUser })
    } catch(error) {
      console.error(error)
      res.json({message: 'Unable to register user'});
    }
}

module.exports.updateUser = async (req, res) => {
  try {
    const user = req.body;
    User.update({
      FirstName: user.FirstName,
      LastName: user.LastName,
      updatedAt: '2020-11-22'
    }, {where: {CNIC: user.CNIC}}).then(async function([rowsUpdate]) {
      const foundUser = await User.findAll({
        where: {
        CNIC: user.CNIC
        }
       }
      )
      res.json({rowsUpdate:rowsUpdate,  foundUser})
    }).catch(error => {
      console.log(error);
      res.json('Unable to update record')})
  } catch(error) {
    console.error(error)
    res.json({message: 'Unable to update user'});
  }
}

  