const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientSchema = new Schema(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        unit: { type: String, enum: ['Oz', 'Tsp', 'Cups', 'Cup', 'Tbs', 'Gms', 'Ml', 'Lbs', 'Kg', 'Cloves', 'Unit', 'Inches'], required: true}
    }, 
{timestamps: true}
)

const recipeSchema = new Schema(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String},
        preparation:{ type: [String], required: true },
        Note: { type: String},
        difficulty: { type: String, required: true },
        prep_time: { type: Number, required: true },
        cook_time: { type: Number, required: true },
        serving_size: { type: Number, required: true },
        ingredients: { type: [ingredientSchema], required: true },
        oven_temperature: { type: Number, required: true },
        value: { type: Number, required: true },
        unit: { type: String, enum: ['F', 'C'], required: false }

})


module.exports = recipeSchema