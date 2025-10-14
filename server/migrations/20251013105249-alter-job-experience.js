'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('job', 'min_experience', {
            type: Sequelize.INTEGER,
        });
        await queryInterface.addColumn('job', 'max_experience', {
            type: Sequelize.INTEGER,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('job', 'max_experience');
        await queryInterface.removeColumn('job', 'min_experience');
    },
};
