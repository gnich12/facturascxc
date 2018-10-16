'use strict';
const uuid = require('uuid/v4')
module.exports = (sequelize, DataTypes) => {
  const recibos = sequelize.define('recibos', {
    detalle: DataTypes.TEXT,
    fecha:{
      type: DataTypes.DATEONLY,
    },
    v_total:{
      type: DataTypes.INTEGER,
    },
  }, {});
  recibos.beforeCreate((recibos,_)=>{
    return recibos.id = uuid()
  })
  recibos.associate = function(models) {
    // associations can be defined here
    recibos.belongsTo(models.clientes, {
      foreignKey: 'clientes_fk',
      as: 'idClientes'
    })
    recibos.belongsTo(models.cxc,{
      foreignKey: 'cxc_fk',
      as: 'idCxc'
    })
  };
  return recibos;
};