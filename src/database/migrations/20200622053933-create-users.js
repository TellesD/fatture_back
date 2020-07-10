'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('places', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },
      cpf: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      birthday: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      address_numb: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('places');

  }
};
