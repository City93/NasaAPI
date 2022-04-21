const Nea = require('../models/neas')

const neas = async (req, res) =>{
    const className = req.query.class
    const fromDate = req.query.from
    const toDate = req.query.to

    try{
        if(req.query.class){
            const classSearch = className[0].toUpperCase() + className.slice(1)
            const data = await Nea.find({orbit_class: classSearch})
            res.status(200).json(data)
        } else if(fromDate || toDate){
            console.log({fromDate} , {toDate})
            const data = await Nea.find({discovery_date: { $gte: fromDate||0, $lte: toDate||2100}})
            res.status(200).json(data)
            // "2011-01-07T00:00:00.000"
        } else {
            const data = await Nea.find({})
            res.status(200).json(data)
        }
    } catch (err){
        console.error(err)
    }

    
}

const controllers = {
    neas
}

module.exports = controllers

// Ruta base: http://localhost:3000/api/astronomy/neas​
// GET para obtener la designación y el período anual en base a la clase orbital del asteroide (con query params)​
// Ejemplo: /astronomy/neas?class=aten​
// GET para obtener designación, fecha y período anual de todos los asteroides que cumplan el filtro de fechas dadas​
// /astronomy/neas?from=2010&to=2015
// /astronomy/neas?from=2010
// /astronomy/neas?to=2015
// En este caso, además, podremos poner la fecha más específica si quisiéramos:
// YYYY-MM-DD
// YYYY-MM
// YYYY
// El endpoint debe ser compatible con los 3 casos​​