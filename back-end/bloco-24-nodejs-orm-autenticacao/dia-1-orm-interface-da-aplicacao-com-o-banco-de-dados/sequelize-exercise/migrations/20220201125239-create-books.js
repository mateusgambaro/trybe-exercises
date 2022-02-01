'use strict';

module.exports = {
 up (queryInterface, Sequelize) {
     return queryInterface.createTable('Books', { 
       id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
       },
       title: {
         allowNull: false,
         type: Sequelize.STRING,
       },
       author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      field: 'updated_at', // a coluna será criada no banco com este nome
    }
      
      });
   
  },

   down (queryInterface, Sequelize) {

    return queryInterface.dropTable('Books');
   
  }
};
