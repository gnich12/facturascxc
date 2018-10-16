'use strict';
const uuid = require('uuid/v4')

module.exports = (sequelize, DataTypes) => {
  const clientes = sequelize.define('clientes', {
    nombre_emp: DataTypes.STRING,
    nit: DataTypes.STRING,
    tipo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo_e: DataTypes.STRING
  }, {});
  clientes.beforeCreate((clientes,_)=>{
    return clientes.id = uuid()
  })
  clientes.associate = function(models) {
    // clientes tiene 1 o mas facturas
    clientes.hasMany(models.facturas,{
      foreignKey:'clientes_fk',
      as: 'id_clientes'
    })
    // clientes tiene 1 o mas recibos
    clientes.hasMany(models.recibos, {
      foreignKey:'recibos_fk',
      as: 'idClientes'
    })
    clientes.hasMany(models.cxc, {
      foreignKey: 'clientes_fk',
      as: 'clientesId'
    })
  };
  return clientes;
};