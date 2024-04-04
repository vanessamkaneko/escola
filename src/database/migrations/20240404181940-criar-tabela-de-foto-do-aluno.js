module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('fotos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    originalname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'alunos', // o campo aluno_id referencia a tabela alunos pelo id
        key: 'id',
      },
      onDelete: 'SET NULL', // se o aluno for apagado, o campo não terá mais o id como referência, podendo ficar nulo
      onUpdate: 'CASCADE', // se o id de um aluno for mudado, todos as fotos dele também serão mudados p/ o mesmo id
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  // async down: (queryInterface, Sequelize) =>  {
  //   /**
  //    * Add reverting commands here.
  //    *
  //    * Example:
  //    * await queryInterface.dropTable('users');
  //    */
  // };
};
