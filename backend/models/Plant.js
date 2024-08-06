const mongoose = require('mongoose');


module.exports = mongoose.model('Plant', mongoose.Schema({
    name: String,
    type: String,
    age: Number,
    price: Number, 
    description: String,
    image: String,
    comments: Array
}));