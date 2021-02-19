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

module.exports = router