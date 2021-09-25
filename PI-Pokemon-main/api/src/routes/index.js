const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ("axios")
const {Pokemon, Type} = require("../db");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApi = async () =>{
    const {data} = await axios.get( "https://pokeapi.co/api/v2/pokemon?limit=40")
    const resultsApi = data.results.map((el) => axios.get(el.url))
    const results = await Promise.all(resultsApi)
    const masInfo = results.map(el => {
        return{
        name: el.data.name,
        hp: el.data.stats[0].base_stat,
        attack: el.data.stats[1].base_stat,
        defense: el.data.stats[2].base_stat,
        speed: el.data.stats[5].base_stat,
        height: el.data.height,
        weight: el.data.weight
        }
      })
    return masInfo
}

const getDb = async() =>{
    return await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ["name"],
            through : {
                attributes: [],
            }
        }
    })
}

const getAll = async() =>{
    const apiInfo = await getApi();
    const dbInfo = await getDb();
    const total = apiInfo.concat(dbInfo)
    return total
}

router.get("/pokemons", async (req,res)=>{
    const name = req.query.name
    let pokemonsTotal = await getAll();
    if(name){
        for(const property in pokemonsTotal){
            if(pokemonsTotal[property].name = name){
                res.status(200).send(pokemonsTotal[property]) 
            }
        }
        res.status(404).send("No esta el personaje");}
    else{
        res.status(200).send(pokemonsTotal)
    }


    })


router.get("/types", async (req,res)=>{
   const {data} = await axios.get("https://pokeapi.co/api/v2/type")
   const types = data.results.map(el => el.name)
   
       
       types.forEach(el =>{
           Type.findOrCreate({
               where: {name: el}
           })
       })
       const allTypes = await Type.findAll();
       res.send(allTypes)
})

router.post("/pokemons", async(req,res)=>{
    let {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        createdInDb,
        type,
    } = req.body

    let pokemonCreated = await Pokemon.create ({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        createdInDb,
    })
    let typeDb = await Type.findAll({
        where: {name : type}
    })
    pokemonCreated.addType(typeDb)
    res.send("Pokemon creado")
})

module.exports = router;
