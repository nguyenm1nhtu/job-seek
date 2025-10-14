'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('job', 'required_cv', {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn('job', 'required_cv', {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        });
    },
};
