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
    height: {
      type: D.STRING,
      allowNull: false,
    },
    weight: {
      type: D.STRING,
      allowNull: false,
    },
    life_span:{
      type: D.STRING
    }, 
    img: {
      type: D.STRING
    }
    }    
  ,{
    timestamps: false,
  });
};

  