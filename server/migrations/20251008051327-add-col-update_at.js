'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        const tables = [
            'users',
            'otp',
            'recruiter',
            'company',
            'candidate',
            'location',
            'job',
            'category',
            'cv',
            'provinces',
            'wards',
            'application',
            'schedule',
            'notification',
            'favourite_job',
        ];

        const t = await queryInterface.sequelize.transaction();
        try {
            for (const table of tables) {
                const columns = await queryInterface.describeTable(table);

                // created_at
                if (!columns.created_at) {
                    await queryInterface.addColumn(
                        table,
                        'created_at',
                        {
                            type: Sequelize.DATE,
                            allowNull: false,
                            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                        },
                        { transaction: t },
                    );

                    // backfill
                    await queryInterface.sequelize.query(
                        `UPDATE "${table}" SET "created_at" = COALESCE("created_at", NOW())`,
                        { transaction: t },
                    );
                }

                // updated_at
                if (!columns.updated_at) {
                    await queryInterface.addColumn(
                        table,
                        'updated_at',
                        {
                            type: Sequelize.DATE,
                            allowNull: false,
                            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                        },
                        { transaction: t },
                    );

                    // backfill
                    await queryInterface.sequelize.query(
                        `UPDATE "${table}" 
             SET "updated_at" = COALESCE("updated_at", "created_at", NOW())`,
                        { transaction: t },
                    );
                }
            }

            await t.commit();
        } catch (err) {
            await t.rollback();
            throw err;
        }
    },

    async down(queryInterface) {
        const tables = [
            'users',
            'otp',
            'recruiter',
            'company',
            'candidate',
            'location',
            'job',
            'category',
            'cv',
            'provinces',
            'wards',
            'application',
            'schedule',
            'notification',
            'favourite_job',
        ];

        const t = await queryInterface.sequelize.transaction();
        try {
            for (const table of tables) {
                const columns = await queryInterface.describeTable(table);

                if (columns.updated_at) {
                    await queryInterface.removeColumn(table, 'updated_at', { transaction: t });
                }
                if (columns.created_at) {
                    await queryInterface.removeColumn(table, 'created_at', { transaction: t });
                }
            }
            await t.commit();
        } catch (err) {
            await t.rollback();
            throw err;
        }
    },
};
