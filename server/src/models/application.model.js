'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Application extends Model {
        static associate(models) {
            Application.belongsTo(models.Cv, { foreignKey: 'cv_id', onDelete: 'SET NULL' });
            Application.belongsTo(models.Job, { foreignKey: 'job_id', onDelete: 'CASCADE' });
            Application.belongsTo(models.Candidate, { foreignKey: 'candidate_id', onDelete: 'CASCADE' });
            Application.hasOne(models.Schedule, { foreignKey: 'application_id', onDelete: 'CASCADE' });
        }
    }

    Application.init(
        {
            application_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            cv_id: {
                type: DataTypes.BIGINT,
            },
            job_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            candidate_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM('pending', 'interview', 'rejected', 'accepted'),
                defaultValue: 'pending',
            },
        },
        {
            sequelize,
            modelName: 'Application',
            tableName: 'application',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Application;
};
