const {Router} = require("express");
const router = Router();
const axios = require('axios')
const {
    YOUR_API_KEY
  } = process.env;


router.get('/:idRaza',(req,res)=>{
  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  .then((response)=>{
     var filterId = response.data.filter((element)=>{
       return element.id.toString() === req.params.idRaza.toString()
      })
      return res.json(filterId)
    }
  )
  .catch(error=>{
    console.log(error)
  })
})

module.exports = router;