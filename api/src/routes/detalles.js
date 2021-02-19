const {Router} = require("express");
const router = Router();
const axios = require('axios')
const {
    YOUR_API_KEY
  } = process.env;


router.get('/',(req,res)=>{
  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  .then(
    
  )
  .catch(error=>{
    console.log(error)
  })
})

module.exports = router;