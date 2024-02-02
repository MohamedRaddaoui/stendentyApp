const mongoose = require('mongoose')

module.exports = mongoose.model('Event', {
    name: { type: String},
    image: { type: String},
    start_day: { type: Date},
    start_time: { type: String},
    category: { type: String},
    description: { type: String},
    type: { type: String},
    app: { type: String},
    app_link: { type: String},
    io_University: { type: String},
    state: { type: String},
    place_name: { type: String},
    location_link: { type: String},
    location_description: { type: String},
})