'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('service_groups', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
  
        },
        places_id:{
          type: Sequelize.INTEGER,
          references: { model: 'places', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,

        },
        name:{
          type: Sequelize.STRING,
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
  
      return queryInterface.dropTable('service_groups');
    
  }
};
