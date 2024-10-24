
const  { Schema } = require('mongoose')

const mushroomSchema = new Schema(
    {
        name: { type: String, required: true },
        scientificName: { type: String, required: true },
        habitat: { type: String, required: true },
        growthCycle: { type: String, required: true },
        nutritionalValue: { type: Object, required: true },
        cultivationDifficulty: { type: Number, required: true },
        seasonality: { type: String, required: true },
        geographicRange: { type: String, required: true },
        uses: { type: String, required: true },
        effects: { type: String, required: true },
        sporePrintColor: { type: String, required: true },
        pricePerPound: { type: Number, required: true },
        type:{type: String, required: true},
        description: { type: String, required: true },
        image: {type: String, required: true}
    },
    
    { timestamps: true },
)

module.exports = mushroomSchema