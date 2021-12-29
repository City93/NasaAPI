const mongoose = require('mongoose')

const objectSchema = {
    id: String,
    name: String,
    nametype: String,
    recclass: String,
    mass: String,
    fall: String,
    year: String,
    reclat: String,
    reclong: String,
    geolocation: Object
};
const landingSchema = mongoose.Schema(objectSchema)

const Landing = mongoose.model('Landing', landingSchema)

module.exports = Landing;

