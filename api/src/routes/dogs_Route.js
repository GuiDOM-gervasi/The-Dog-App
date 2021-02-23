const {Router} = require("express");
const router = Router();
const axios = require('axios')
const {
    YOUR_API_KEY
  } = process.env;

router.get('/',(req,res)=>{
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    .then((response)=> {
        // handle success
        if(req.query.name){
          var filter = response.data.filter(element=>{
              return element.name.includes(req.query.name)
           })
          if(!filter.length){
            res.send('No se ha encontrado un perro con ese nombre')
          }
          if(filter.length>8){
            filter = filter.splice(0,8)
            return res.json(filter)
          }
          return res.json(filter)
        }
        var principal = [];
        var eight = response.data.splice(0,8)
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
        return res.send('No se ha encontrado un perro con el id ingresado')
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
  .catch(error=>{
    res.json(error.message)
  })
})


module.exports = router