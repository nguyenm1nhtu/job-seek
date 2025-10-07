'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('schedule', {
            schedule_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            application_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            recruiter_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            candidate_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            interview_time: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            location_id: {
                type: Sequelize.BIGINT,
            },
            notes: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable('schedule');
    },
};
