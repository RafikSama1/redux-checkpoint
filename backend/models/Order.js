const mongoose = require("mongoose");

module.exports = mongoose.model("Order", mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  items: [
    {
      plant: {type: mongoose.Schema.Types.ObjectId, ref: "Plant"},
      quantity: Number
    }
  ],
}));
