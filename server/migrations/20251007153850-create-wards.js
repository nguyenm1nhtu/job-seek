'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('wards', {
            code: {
                type: Sequelize.STRING(20),
                primaryKey: true,
            },

            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },

            province_code: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('wards');
    },
};
