'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('application', {
            application_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            candidate_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            job_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            cv_id: {
                type: Sequelize.BIGINT,
            },
            status: {
                type: Sequelize.STRING(20),
                defaultValue: 'submitted',
            },
            applied_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            email: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('application');
    },
};
