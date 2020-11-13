var User = require('../models/User').User;
const {generateToken} = require('../services/auth')

module.exports.getUser = async (req, res) => {
    const userId = req.params.userId
     try {
      const user = await User.findAll({
        where: {
        id: userId
      }
     }
    )
      res.json({ user , token: generateToken()})
    } catch(error) {
      console.error(error)
    }   
}

module.exports.registerUser = async (request, response) => {
    
}

  