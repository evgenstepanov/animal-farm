const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: String,
  weight: Number,
  gender: String,
  height: Number,
  color: String,
  diet: String,
  temper: String,
  image: String,
});

module.exports = mongoose.model('giraffe', AnimalSchema);
