'use strict';
const uuid = require('uuid/v4')
module.exports = (sequelize, DataTypes) => {
  const factcxc = sequelize.define('factcxc', {
    estado: DataTypes.STRING,
    fecha_pago: DataTypes.DATEONLY,
    modo_pago: {
      type: DataTypes.STRING,
    },
    tipo_pago: {
      type:DataTypes.STRING
    },
    retefuente: {
      type: DataTypes.INTEGER
    },
    ica: {
      type: DataTypes.INTEGER
    }
  }, {});
  factcxc.beforeCreate((factcxc,_)=>{
    return factcxc.id = uuid()
  })
  factcxc.associate = function(models) {
    // associations can be defined here
    factcxc.belongsTo(models.facturas, {
      foreignKey: 'facturas_fk',
      as: 'id_facturas'
    })
    factcxc.belongsTo(models.cxc, {
      foreignKey: 'cxc_fk',
      as: 'id_cxc'
    })
  };
  return factcxc;
};