const apiKey = process.env.API_KEY
const Landing = require('../models/landing')

const landings = (req, res) =>{
    res.send('esto es landings')
}
const mass = async (req, res) =>{
    console.log(req.params.mass)
    const massNumber = parseInt(req.params.mass) || parseInt(req.query.minimum_mass)
    if(massNumber){
        const data = await Landing.find({mass: { $gte: massNumber }})
        console.log(data.slice(0,3))
    }
}

const landingClass = async (req,res) =>{
    console.log(req.params.class)
    const className = req.params.class
    if (className){
        const data = await Landing.find({recclass: { $eq: className}})
        console.log(data.slice(0,3))
    }

}

        const controllers = {
            landings,
            mass,
            landingClass
        }
        
module.exports = controllers