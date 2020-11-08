var User = require('../models/User').User;

module.exports.getUser = async (request, response) => {
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
}

module.exports.registerUser = async (request, response) => {
    
}

  