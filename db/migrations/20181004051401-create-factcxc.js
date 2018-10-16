'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('factcxcs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      facturas_fk: {
        type: Sequelize.UUID,
        reference: {
          model: 'facturas',
          key: 'id'
        }
      },
      cxc_fk: {
        type: Sequelize.UUID,
        allowNull: false,
        reference: {
          model: 'cxc',
          key: 'id'
        }
      },
      estado: {
        type: Sequelize.STRING,
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
      retefuente: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ica: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('factcxcs');
  }
};