const mongoose = require(`mongoose`)
const mushroomSchema = require(`./mushroom`)
const userSchema = require('./user')
const recipeSchema = require('./recipes')

const Mushrooms = mongoose.model(`Mushrooms`, mushroomSchema)
const Users = mongoose.model(`Users`, userSchema)
const Recipes = mongoose.model('Recipes', recipeSchema)


module.exports = {
    Mushrooms,
    Users,
    Recipes,
}