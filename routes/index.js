const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const recipeController = require('../controllers/recipeController')


router.get('/api/users', userController.index)
router.post('/api/users/', userController.create)
router.get('/api/users/:userId', userController.show)
router.patch('/api/users/:userId', userController.update)
router.delete('/api/users/:userId', userController.delete)

router.get('/api/users/:userId/recipes', recipeController.index)
router.post('/api/users/:userId/recipes', recipeController.create)
router.get('/api/recipes/:recipeId', recipeController.show)
router.patch('/api/recipes/:recipeId', recipeController.update)
router.delete('/api/recipes/:recipeId', recipeController.delete)




module.exports = router