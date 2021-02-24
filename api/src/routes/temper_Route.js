const {Router} = require("express");
const router = Router();
const {conn} = require('../db.js')
const {Temperament} = conn.models
const {
    YOUR_API_KEY
  } = process.env;

router.get('/',(req,res)=>{
    Temperament.findAll()
    .then((response)=>{
        var tempes = response.map((e)=>{
            return {
                name: e.name,
                id: e.id
            }
        })
        res.json(tempes)
    })
      
})

module.exports = router  