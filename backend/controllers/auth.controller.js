const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async(req, res) => {

    const user = await User.findOne({email: req.body.email, password: req.body.password});

    if(!user) {
        return res.status(422).json({message: "Wrong email or password"});
    }

    const token = jwt.sign({userId: user._id}, process.env.TOKEN_SECRET, { expiresIn: '1800s',  });
    res.json({
        token
    });

};

