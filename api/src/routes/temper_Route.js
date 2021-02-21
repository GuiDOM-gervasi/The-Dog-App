const {Router} = require("express");
const router = Router();
const axios = require('axios')
const {
    YOUR_API_KEY
  } = process.env;

router.use('/',(req,res)=>{
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    .then((response)=>{
        
        var array = response.data.map(element => {          
                return element.temperament
        });
        
         var s = array.map((e)=>{
             if(e !== undefined && e !== null){
                 return e.split(",")
             }
        })
        var a = [];
        s.forEach(e=>a = a.concat(e))    
        res.json([...new Set(a)])
    })
    .catch((error)=>{
        res.json(error.message)
    })
})

module.exports = router  