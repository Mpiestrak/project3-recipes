const User = require('../models/User')
const Recipe = require('../models/Recipe')

const recipeController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('myRecipes')
            .then((user) => {
                res.send(user.myRecipes)
            })
    },
    show: (req, res) => {
        var recipeId = req.params.recipeId
        Recipe.findById(recipeId)
            .then((recipe) => {
                res.send(recipe)
            })
    },
    delete: (req, res) => {
        var recipeId = req.params.recipeId
        Recipe.findByIdAndDelete(recipeId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var recipeId = req.params.recipeId
        Recipe.findByIdAndUpdate(recipeId, req.body, { new: true })
            .then((updatedRecipe) => {
                updatedRecipe.save()
                res.send(updatedRecipe)
            })
    },
    create: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                console.log(user)
                Recipe.create(req.body)
                    .then((newRecipe) => {
                        console.log(newRecipe)
                        console.log(user.recipes)
                        user.myRecipes.push(newRecipe)
                        user.save()
                        res.send(newRecipe)
                    })
            })
    }

}

module.exports = recipeController