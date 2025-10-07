'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('company', {
            company_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            company_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            logo_path: {
                type: Sequelize.TEXT,
            },
            company_description: {
                type: Sequelize.TEXT,
            },
            website: {
                type: Sequelize.TEXT,
            },
            location_id: {
                type: Sequelize.BIGINT,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('company');
    },
};
