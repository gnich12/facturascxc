'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('facturas', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      clientes_fk: {
        type: Sequelize.UUID,
        allowNull: false,
        reference: {
          model: 'clientes',
          key: 'id'
        }
      },
      factura_no: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      v_consumo:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      prop_transp:{
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      ipc:{
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      v_total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nombre_personal: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      notas: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('facturas');
  }
};