const foodsRouter = require('express').Router();
const foodsControllers = require('../controllers/foodControllers')

foodsRouter.get('/', foodsControllers.getAllFoods)
foodsRouter.post('/', foodsControllers.postFoods)
foodsRouter.put('/:id', foodsControllers.putDataById)
foodsRouter.delete('/:id', foodsControllers.deleteData)

module.exports = foodsRouter