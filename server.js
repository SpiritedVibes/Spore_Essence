const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const mushroomController = require(`./controllers/mushroomController`)
const userController = require(`./controllers/userController`)
const ingredientsController = require(`./controllers/ingredientsController`)
const recipeController = require(`./controllers/recipeController`)

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/mushrooms', mushroomController.getAllMushrooms)
app.get('/mushrooms/type/:type', mushroomController.getMushroomByType)
app.get('/mushrooms/:id',  mushroomController.getMushroomById)
app.post('/mushrooms',  mushroomController.createMushroom)
app.put('/mushrooms/:id',  mushroomController.updateMushroom)
app.delete('/mushrooms/:id',  mushroomController.deleteMushroom)

app.get('/users', userController.getAllUsers)
app.get('/users/type/:email', userController.getUserByEmail)
app.get('/users/:id', userController.getUserById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

app.get('/ingredients', ingredientsController.getAllIngredients)
app.get('/ingredients/:id', ingredientsController.getIngredientById)
app.post('/ingredients', ingredientsController.createIngredient)
app.put('/ingredients/:id', ingredientsController.updateIngredient)
app.delete('/ingredients/:id', ingredientsController.deleteIngredient)

app.get('/recipes', recipeController.getAllRecipes)
app.post('/recipes', recipeController.createRecipe)
app.get('/recipes/:id', recipeController.getRecipeById)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})