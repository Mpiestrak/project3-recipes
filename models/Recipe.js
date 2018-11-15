const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Recipe = new Schema({
    name: String,
    img: String,
    mainIngredient: String,
    ingredients: [],
    preparation: String,
    timeNeeded: String
})

module.exports = mongoose.model('Recipe', Recipe)