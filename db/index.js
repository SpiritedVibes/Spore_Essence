const mongoose = require('mongoose')


mongoose
.connect(`mongodb+srv://SpiritedVibes:GothicRaven3@cluster0.pqgyz.mongodb.net/sporeEssenceDatabase?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db