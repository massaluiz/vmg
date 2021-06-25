'use strict';
/*
criar um seed:  npx sequelize-cli seed:generate --name demo-user
executar os seeds: npx sequelize-cli db:seed:all
*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('users', [
        {
          name: 'Luiz Massa de Pontes',
          password: '1234',
          email: 'luimassapontes@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
       },
       {
        name: 'Maria Eduarda Viana',
        password: '1234',
        email: 'dudaviana@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
  }
};
