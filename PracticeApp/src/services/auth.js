const jwt = require("jsonwebtoken");

module.exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}


module.exports.generateToken = async (cnic) => {
  return jwt.sign(cnic, process.env.TOKEN_SECRET);
}
