'use strict';
const uuid = require('uuid/v4')
module.exports = (sequelize, DataTypes) => {
  const facturas = sequelize.define('facturas', {
    factura_no: DataTypes.STRING,
    fecha: DataTypes.DATEONLY,
    v_consumo:{
      type: DataTypes.INTEGER,
    },
    prop_transp:{
      type: DataTypes.INTEGER,
    },
    ipc:{
      type:DataTypes.INTEGER, 
    },
    v_total: {
      type: DataTypes.INTEGER,
    },
    nombre_personal: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.STRING,
    },
    notas: {
      type: DataTypes.TEXT,
    },
  }, {});
  facturas.beforeCreate((facturas, _)=>{
    return facturas.id = uuid()
  })
  facturas.associate = function(models) {
    // associations can be defined here
    facturas.belongsTo(models.clientes,{
      foreignKey: 'clientes_fk',
      as: 'id_clientes'
    })
    facturas.hasMany(models.factcxc,{
      foreignKey: 'facturas_fk',
      as: 'id_facturas'
    })
  };
  return facturas;
};