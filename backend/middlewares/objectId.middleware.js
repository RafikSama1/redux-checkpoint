const mongoose = require('mongoose');

module.exports = (req, res, next) => {
    if(mongoose.Types.ObjectId.isValid(req.params.id)) {
        next();
    }
    else {
        res.status(400).json({message: "Invalid Object ID"});
    }
}