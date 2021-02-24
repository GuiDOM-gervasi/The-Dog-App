const {Router} = require("express");
const router = Router();
const {conn} = require('../db.js')
const {Dog, Temperament} = conn.models

let idDog = 264;
router.post('/',async(req,res)=>{
    if(req.body){
        idDog++
        const {name,heigth,weight,life_span,tempes} = req.body
        const dog = await Dog.create(
            {
                id: idDog,
                name,
                heigth,
                weight,
                life_span
            }) 
        const temperament = await Temperament.findOne({
            where: {name : tempes}
        })
        dog.addTemperament(temperament)  
        return res.json(dog);

    }
    
})

module.exports = router;
