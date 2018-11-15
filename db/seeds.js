const User = require('../models/User')
const Recipe = require('../models/Recipe')
const mongoose = require('./connections')

const mashedPotatoes = new Recipe({
    name: 'Mashed Potatoes',
    image: '#',
    mainIngredient: 'Potatoes',
    ingredients: ['potatoes', 'butter', 'salt'],
    preparation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum expedita, amet velit soluta quidem reprehenderit temporibus esse sit quam? Alias beatae molestiae dolores corporis sint inventore maxime ipsum autem.',
    timeNeeded: '1 hour'
})

const bakedChicken = new Recipe({
    name: 'Baked Chicken',
    image: '#',
    mainIngredient: 'Chicken',
    ingredients: ['chicken', 'spices', 'oil'],
    preparation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum expedita, amet velit soluta quidem reprehenderit temporibus esse sit quam? Alias beatae molestiae dolores corporis sint inventore maxime ipsum autem.',
    timeNeeded: '2 hours'
})

const steak = new Recipe({
    name: 'Steak',
    image: '#',
    mainIngredient: 'Beef',
    ingredients: ['Beef', 'spices'],
    preparation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum expedita, amet velit soluta quidem reprehenderit temporibus esse sit quam? Alias beatae molestiae dolores corporis sint inventore maxime ipsum autem.',
    timeNeeded: '5 minutes'
})

const spence = new User({
    username: 'spenceM',
    password: '12345',
    name: 'Spencer',
    myRecipes: [steak, mashedPotatoes]
})

const stan = new User({
    username: 'StanTheMan',
    password: 'password',
    name: 'Stan',
    myRecipes: [bakedChicken]
})

User.remove({})
.then(() => Recipe.remove({}))
.then(() => Recipe.insertMany([mashedPotatoes, bakedChicken, steak]))
.then(() => spence.save())
.then(() => stan.save())
.then(() => console.log('Seeded Successfully'))
.then(() => mongoose.connection.close())