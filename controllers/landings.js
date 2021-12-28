const landings = (req, res) =>{
    res.send('esto es landings')
}
const mass = (req, res) =>{
    console.log(req.params.mass)
}

const controllers = {
    landings,
    mass
}

module.exports = controllers