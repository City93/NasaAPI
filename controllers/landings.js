const apiKey = process.env.API_KEY
const Landing = require('../models/landing')

const landings = (req, res) =>{
    res.send('esto es landings')
}
const mass = (req, res) =>{
    console.log(req.params.mass)
    console.log(apiKey)
}


const getLandings = async (req,res) => {   
    
    const data = await Landing.find({mass: { $gty: 1001 }})
    console.log({data})

    // Consulta 
    // Los datos
    // del producto correspondiente
    // let data;
    // if(req.params.id){
        //     data = await dataProduct.getProductById(req.params.id);
        //     res.status(200).render('product', {products:[data]}) // Creo un array con 1 dato
        // } else{
            //     data = await dataProduct.getAllProducts();
            //     res.status(200).render('product',{products:data}) // Envio un array con N datos
            // }
        }
        const controllers = {
            landings,
            mass,
            getLandings
        }
        
module.exports = controllers