const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async(req, res, next) => {
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  
  if (!token) {
    return res.status(401).json({message: "Unauthorized"});
  }

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, data) => {

    if (err) {
        return res.status(403).json({message: "Unauthenticated"});
    };

    req.user = await User.findById(data.userId);

    next();
  })
};