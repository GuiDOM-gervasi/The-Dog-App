const {Router} = require("express");
const router = Router();
const {conn} = require('../db.js')
const {Dog} = conn.models

let idDog = 264;
router.post('/',async(req,res)=>{
    if(req.body){
        idDog++
        const {name,heigth,weight,life_span} = req.body
        const dog = await Dog.create(
            {
                id: idDog,
                name,
                heigth,
                weight,
                life_span
            }) 
        return res.json(dog);

    }
    
})

module.exports = router;
