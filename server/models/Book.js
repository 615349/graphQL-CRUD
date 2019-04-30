const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  genre: String
});

module.exports = mongoose.model('Book', BookSchema);
