const mongoose = require('mongoose')

const dbURI = 'mongodb+srv://eventManager:bDGPap975wQsqBLb@cluster0.keknjcd.mongodb.net/event_db?retryWrites=true&w=majority'

module.exports = () => {
   return mongoose.connect(dbURI)
}