const User = require('../models/User')
const Recipe = require('../models/Recipe')

const userController = {
    index: (req, res) => {
        User.find({})
        .then((users) => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId).populate('myRecipes')
        .then((user) => {
            res.send(user)
        })
    }
}

module.exports = userController