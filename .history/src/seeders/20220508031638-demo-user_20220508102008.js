'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    email: 'John Doe',
                    password: 123,
                    username: 'John Doe1',
                },
                {
                    email: 'John Doe',
                    password: 123,
                    username: 'John Doe2',
                },
                {
                    email: 'John Doe',
                    password: 123,
                    username: 'John Doe3',
                },
            ],
            {}
        )
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
}
