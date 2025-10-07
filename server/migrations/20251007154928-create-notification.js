'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('notification', {
            notification_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            type: {
                type: Sequelize.ENUM('application_status', 'interview_schedule', 'job_update'),
                allowNull: false,
            },
            message: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            is_read: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            related_id: {
                type: Sequelize.BIGINT,
            },
            related_type: {
                type: Sequelize.STRING(50),
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
        await queryInterface.dropTable('notification');
    },
};
