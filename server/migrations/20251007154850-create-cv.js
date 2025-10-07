'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('cv', {
            cv_id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            candidate_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            file_name: {
                type: Sequelize.TEXT,
            },
            file_path: {
                type: Sequelize.TEXT,
            },
            file_type: {
                type: Sequelize.ENUM('doc', 'docx', 'pdf'),
            },
            status: {
                type: Sequelize.ENUM('active', 'archived'),
                defaultValue: 'active',
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
        await queryInterface.dropTable('cv');
    },
};
