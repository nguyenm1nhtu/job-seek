'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Schedule extends Model {
        static associate(models) {
            Schedule.belongsTo(models.Application, { foreignKey: 'application_id', onDelete: 'CASCADE' });
            Schedule.belongsTo(models.Recruiter, { foreignKey: 'recruiter_id', onDelete: 'RESTRICT' });
            Schedule.belongsTo(models.Candidate, { foreignKey: 'candidate_id', onDelete: 'RESTRICT' });
            Schedule.belongsTo(models.Location, { foreignKey: 'location_id', onDelete: 'SET NULL' });
        }
    }

    Schedule.init(
        {
            schedule_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            application_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            recruiter_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            candidate_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            location_id: {
                type: DataTypes.BIGINT,
            },
            interview_time: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM('scheduled', 'completed', 'canceled'),
                defaultValue: 'scheduled',
            },
        },
        {
            sequelize,
            modelName: 'Schedule',
            tableName: 'schedule',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Schedule;
};
