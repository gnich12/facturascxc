'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recibos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      clientes_fk: {
        type: Sequelize.UUID,
        reference: {
          model: 'clientes',
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
      detalle: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fecha:{
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      v_total:{
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('recibos');
  }
};