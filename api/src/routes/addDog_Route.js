const {Router} = require("express");
const router = Router();
const {conn} = require('../db.js');
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
        if(tempes){
           tempes.map(async(t)=>{
            const temperament = await Temperament.findAll({
                where: {name : t},
            })
            dog.addTemperament(temperament)
           })      
            return res.json(dog);
        }
        return res.json(dog);
        
    }
    
})

module.exports = router;
