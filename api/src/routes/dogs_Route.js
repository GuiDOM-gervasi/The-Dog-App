const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { conn } = require("../db.js");
const { parserArray, filtro } = require("../utils/parser.js");
const { Dog, Temperament } = conn.models;
const { YOUR_API_KEY } = process.env;

router.get("/", (req, res) => {
  Promise.all([
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`),
    Dog.findAll({
      include: {
        model: Temperament,
      },
    }),
  ])
    .then((response) => {
      // handle success
      var principal = [];
      response[0].data.forEach((element) => {
        var obj = {
          id: element.id,
          name: element.name,
          img: element.image.url,
          temperament: element.temperament,
          weight: element.weight.metric,
        };
        principal.push(obj);
      });
      response[1].forEach((element) => {
        var obj = {
          id: element.id,
          name: element.name,
          temperament: parserArray(element.temperaments),
          weight: element.weight,
          img: element.img,
        };
        principal.push(obj);
      });
      if (req.query.name) {
        var filterName = filtro(principal, req.query.name);

        return res.json(filterName);
      }
      return res.json(principal);
    })
    .catch(function (error) {
      // handle error
      res.json(error);
    });
});

router.get("/:idRaza", (req, res) => {
  Promise.all([
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`),
    Dog.findByPk(parseInt(req.params.idRaza), {
      include: { model: Temperament },
    }),
  ])
    .then((response) => {
      var findId = response[0].data.find((element) => {
        return element.id.toString() === req.params.idRaza;
      });
      if (!findId) {
        const {
          id,
          name,
          height,
          weight,
          life_span,
          temperaments,
          img,
        } = response[1];
        var dogDB = {
          id,
          name,
          height,
          weight,
          life_span,
          temperament: parserArray(temperaments),
          img,
        };
        return res.json(dogDB);
      }

      var { name, image, temperament, height, weight, life_span } = findId;
      var obj = {
        name,
        img: image.url,
        temperament,
        height: height.metric,
        weight: weight.metric,
        life_span,
      };

      return res.json(obj);
    })
    .then((response) => {
      if (!response) {
        return res.json("No se ha encontrado un dog con el id ingresado");
      }
      return res.json(response);
    })
    .catch((error) => {
      res.json(error.message);
    });
});

module.exports = router;
