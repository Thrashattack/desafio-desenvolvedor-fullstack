'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Simulations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            schema: 'public'
          },
          key: 'id'
        },
      },
      months: {
        type: Sequelize.INTEGER
      },
      initialAmount: {
        type: Sequelize.DECIMAL
      },
      cdbRentability: {
        type: Sequelize.DECIMAL
      },
      savingsRentability: {
        type: Sequelize.DECIMAL
      },
      cdiOverCdb: {
        type: Sequelize.DECIMAL
      },
      cdbFinalAmount: {
        type: Sequelize.DECIMAL
      },
      savingsFinalAmount: {
        type: Sequelize.DECIMAL
      },
      simulationDate: {
        type: Sequelize.DATE
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Simulations');
  }
};