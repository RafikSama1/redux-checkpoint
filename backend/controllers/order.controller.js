const Order = require('../models/Order');

exports.index = async (req, res) => {
    const orders = await Order.find();
    return res.json(orders);
};

exports.store = async (req, res) => {
    const order = await Order.create(req.body);
    return res.json(order);
};

exports.show = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('items.plant');
    return order ? res.json(order) : res.status(404).json({ message: "Not found" });
};

exports.update = async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body , { new: true });
    return order ? res.json(order) : res.status(404).json({ message: "Not found" });
};

exports.delete = async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    return order ? res.json({ message: "Deleted successfully" }) : res.status(404).json({ message: "Not found" });
};