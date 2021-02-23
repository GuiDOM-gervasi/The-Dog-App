const {Router} = require("express");
const router = Router();
const axios = require('axios')
const models = require('../db.js')
const {Temperament} = models.conn.models
const {
    YOUR_API_KEY
  } = process.env;

router.use('/',(req,res)=>{
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