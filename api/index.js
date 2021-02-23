//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const { default: axios } = require('axios');
const server = require('./src/app.js');
const {conn} = require('./src/db.js');
const utils = require('./src/utils/parser.js');
const {
  YOUR_API_KEY
} = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  const {Dog, Temperament} = conn.models
  
  return axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
  .then((response)=>{
      var arr = response.data.map(element => { 
          if(element.temperament !== null){
              return element.temperament
          }         
      });
      arr = utils.parser(arr)
      var tempes = arr.map( async e => {
        await Temperament.create(
            {
                name: e
            }
        )
      } )
  })
 
});

