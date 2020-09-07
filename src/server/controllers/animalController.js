const Animal = require('../models/animalModel');

module.exports = {
  getAnimals: async (req, res) => {
    try {
      const animals = await Animal.find();
      res.json(animals);
    } catch (err) {
      res.json({ message: err });
    }
  },
  postAnimal: async (req, res) => {
    const animal = new Animal({
      name: req.body.name,
      weight: req.body.weight,
      gender: req.body.gender,
      height: req.body.height,
      color: req.body.color,
      diet: req.body.diet,
      temper: req.body.temper,
      image: req.body.image,
    });
    try {
      const savedAnimal = await animal.save();
      res.json(savedAnimal);
    } catch (err) {
      res.json({ message: err });
    }
  },
  getAnimalById: async (req, res) => {
    try {
      const animal = await Animal.findById(req.params.id);
      res.json(animal);
    } catch (err) {
      res.json({ message: err });
    }
  },
  putAnimalById: async (req, res) => {
    try {
      const animal = await Animal.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.json(animal);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteAnimalById: async (req, res) => {
    try {
      const animal = await Animal.deleteOne({ _id: req.params.id });
      res.json(animal);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
