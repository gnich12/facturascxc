'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cxcs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      clientes_fk: {
        type: Sequelize.UUID,
        reference: {
          model: 'clientes',
          key: 'id'
        }
      },
      total_cxc: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fecha_pago: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      modo_pago: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_pago: {
        type:Sequelize.STRING,
        allowNull: true
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
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
    return queryInterface.dropTable('cxcs');
  }
};