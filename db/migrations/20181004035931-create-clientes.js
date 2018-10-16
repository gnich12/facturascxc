'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      nombre_emp: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nit:{
        type: Sequelize.STRING,
        allowNull: true
      },
      tipo:{
        type:Sequelize.STRING,
        allowNull:false
      },
      direccion:{
        type:Sequelize.STRING
      },
      telefono:{
        type: Sequelize.STRING,
        allowNull: true
      },
      correo_e:{
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientes');
  }
};