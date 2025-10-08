'use strict';

const [Model, DataTypes] = require('sequelize');

module.exports = (sequelize) => {
    class Recruiter extends Model {
        static associate(models) {
            Recruiter.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            Recruiter.belongsTo(models.Company, { foreignKey: 'company_id', onDelete: 'RESTRICT' });
            Recruiter.hasMany(models.Job, { foreignKey: 'recruiter_id', onDelete: 'RESTRICT' });
            Recruiter.hasMany(models.Schedule, { foreignKey: 'recruiter_id', onDelete: 'RESTRICT' });
        }
    }

    Recruiter.init(
        {
            recruiter_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },

            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                unique: true,
            },

            company_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },

        {
            sequelize,
            modelName: 'Recruiter',
            tableName: 'recruiter',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Recruiter;
};
