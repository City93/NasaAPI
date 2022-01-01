const Landing = require('../models/landing')

const landings = async (req, res) =>{
    console.log(req.params.mass)
    console.log(req.query.prueba)
    const massNumber = parseInt(req.params.mass) || parseInt(req.query.minimum_mass)
    const fromDate = req.query.from
    const toDate = req.query.to
    try{
        if(massNumber){
            const data = await Landing.find({mass: { $gte: massNumber }})
            res.status(200).json(data)
        }
        if(fromDate || toDate){
            console.log({fromDate} , {toDate})
            const data = await Landing.find({year: { $gte: fromDate||0, $lte: toDate||2100}})
            res.status(200).json(data)
        }
    } catch (err){
        res.status(400).json({'error':err})
    }
}

const landingClass = async (req,res) =>{
    console.log(req.params.class)
    const className = req.params.class
    if (className){
        const data = await Landing.find({recclass: { $eq: className.toUpperCase()}})
        res.status(200).json(data)
    }

}

        const controllers = {
            landings,
            landingClass
        }
        
module.exports = controllers