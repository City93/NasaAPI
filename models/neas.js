const mongoose = require('mongoose')

const objectSchema = {
    designation: String,
    discovery_date: Date,
    h_mag: Number,
    moid_au: Number,
    q_au_1: Number,
    q_au_2: Number,
    period_yr: Number,
    i_deg: Number,
    pha: String,
    orbit_class: String
};
const neasSchema = mongoose.Schema(objectSchema)

const Neas = mongoose.model('Neas', neasSchema)

module.exports = Neas;