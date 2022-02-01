'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Leonardo da Vinci',
        author:'Walter Isaac',
        pageQuantity: 340,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Walden',
        author: 'Henry David Thoreau',
        pageQuantity: 410,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }]
    );
  },

  async down (queryInterface, Sequelize) {

  await queryInterface.bulkDelete('Boks', null, {});
  }
};
