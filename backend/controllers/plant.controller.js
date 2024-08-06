const Plant = require('../models/Plant');

exports.index = async (req, res) => {
    const plants = await Plant.find();
    return res.json(plants);
};

exports.store = async (req, res) => {
    const data = {
        name: req.body.name,
        type: req.body.type,
        age: req.body.age,
        price: req.body.price,
        description: req.body.description,
        image: req.file.path,
        comments: [],
    };
    const plant = await Plant.create(data);
    return res.json(plant);
};

exports.show = async (req, res) => {
    const plant = await Plant.findById(req.params.id);
    return plant ? res.json(plant) : res.status(404).json({ message: "Not found" });
};

exports.update = async (req, res) => {
    const data = {
        name: req.body.name,
        type: req.body.type,
        age: req.body.age,
        price: req.body.price,
        description: req.body.description,
        image: req.file.path
    };

    const plant = await Plant.findByIdAndUpdate(req.params.id, data , { new: true });
    return plant ? res.json(plant) : res.status(404).json({ message: "Not found" });
};

exports.delete = async (req, res) => {
    const plant = await Plant.findByIdAndDelete(req.params.id);
    return plant ? res.json({ message: "Deleted successfully" }) : res.status(404).json({ message: "Not found" });
};

exports.comment = async(req, res) => {
    const plant = await Plant.findById(req.params.id);

    if(!plant) {
        return res.status(404).json({message: "Not found"});
    }

    const {comment} = req.body;
    
    plant.comments.push(comment);
    plant.save();

    res.json(plant);
}