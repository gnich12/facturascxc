'use strict';
const uuid = require('uuid/v4')
module.exports = (sequelize, DataTypes) => {
  const cxc = sequelize.define('cxc', {
    estado: DataTypes.STRING,
    total_cxc: DataTypes.INTEGER,
    fecha_pago: DataTypes.DATEONLY,
    modo_pago: {
      type: DataTypes.STRING
    },
    tipo_pago: {
      type:DataTypes.STRING
    },
    fecha: {
      type: DataTypes.DATEONLY
    }
  }, {});
  cxc.beforeCreate((cxc,_)=>{
    return cxc.id = uuid()
  })
  cxc.associate = function(models) {
    // associations can be defined here
    cxc.hasOne(models.recibos, {
      foreignKey:'cxc_fk',
      as: 'idCxc'
    })
    cxc.belongsTo(models.clientes,{
      foreignKey: 'clientes_fk',
      as: 'clientesId'
    })
    cxc.hasMany(models.factcxc,{
      foreignKey: 'cxc_fk',
      as: 'id_cxc'
    })
  };
  return cxc;
};