const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Luna',
        email: 'luna_lu@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Luna 2',
        email: 'luna2_lu@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Luna 3',
        email: 'luna3_lu@gmail.com',
        password_hash: await bcryptjs.hash('123654', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Bento',
        email: 'bento_b@gmail.com',
        password_hash: await bcryptjs.hash('112233', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        nome: 'Gil',
        email: 'gi_gil@gmail.com',
        password_hash: await bcryptjs.hash('1236544', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
};
// async down() {}
