const {Router} = require("express");
const router = Router();
const axios = require('axios')
const {conn} = require('../db.js')
const {Dog,Temperament} = conn.models;
const {
    YOUR_API_KEY
  } = process.env;

router.get('/',(req,res)=>{
  Promise.all([axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`),
  Dog.findAll()])   
    .then((response)=> {
        // handle success
        if(req.query.name){
          var filterAPI = response[0].data.filter(element=>{
              return element.name.includes(req.query.name)
           })
           var filterDB = response[1].filter(element=>{
            return element.name.includes(req.query.name)
         })
          if(filterAPI.length>8){
            filterAPI = filterAPI.splice(0,8)
            return res.json(filterAPI)
          }
          return res.json(filterDB.concat(filterAPI))
        }
        var principal = [];
        var eight = response[0].data.splice(0,8)
        eight.forEach(element => {
            var obj = {
                name: element.name,
                img: element.image.url,
                temperament: element.temperament
            }
            principal.push(obj)
        });
        res.json(principal)
        
      })
      .catch(function (error) {
        // handle error
        res.json(error);
      }) 
})

router.get('/:idRaza',(req,res)=>{
  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  .then((response)=>{
     var findId = response.data.find((element)=>{
       return element.id.toString() === req.params.idRaza
      })
      if(!findId){
        return Dog.findByPk(parseInt(req.params.idRaza),{
          include:{model : Temperament}
        })
      }
     
    var {name,image,temperament,height,weight,life_span} = findId   
     var obj = {
                name,
                img: image.url,
                temperament,
                height,
                weight,
                life_span
            }
        
      return res.json(obj)
    }
  )
  .then((response)=>{
    if(!response){
      return res.json("No se ha encontrado un dog con el id ingresado")
    }
    return res.json(response)
  })
  .catch(error=>{
    res.json(error.message)
  })
})


module.exports = router