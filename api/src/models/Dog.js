const { DataTypes : D} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: D.INTEGER,
      primaryKey: true,
    },
    name: {
      type: D.STRING,
      allowNull: false,
    },
    heigth: {
      type: D.STRING,
      
    },
    weight: {
      type: D.STRING,
      
    },
    life_span:{
      type: D.STRING
    },     
  },{
    timestamps: false,
  });
};

  