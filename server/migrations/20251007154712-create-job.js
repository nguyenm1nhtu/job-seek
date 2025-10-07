'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('job', {
            job_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            recruiter_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            company_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            type: {
                type: Sequelize.ENUM('immediately', 'urgent', 'other'),
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
            },
            requirement: {
                type: Sequelize.TEXT,
            },
            benefit: {
                type: Sequelize.TEXT,
            },
            min_salary: {
                type: Sequelize.DECIMAL,
            },
            max_salary: {
                type: Sequelize.DECIMAL,
            },
            experience: {
                type: Sequelize.ENUM('intern', 'junior', 'senior', 'lead'),
            },
            status: {
                type: Sequelize.ENUM('open', 'closed'),
                defaultValue: 'open',
            },
            required_cv: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            category_id: {
                type: Sequelize.BIGINT,
            },
            deadline: {
                type: Sequelize.DATE,
            },
            limited: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        await queryInterface.dropTable('job');
    },
};
