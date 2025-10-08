'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Job extends Model {
        static associate(models) {
            Job.belongsTo(models.Recruiter, { foreignKey: 'recruiter_id', onDelete: 'RESTRICT' });
            Job.belongsTo(models.Company, { foreignKey: 'company_id', onDelete: 'RESTRICT' });
            Job.belongsTo(models.Category, { foreignKey: 'category_id' });
            Job.hasMany(models.Application, { foreignKey: 'job_id', onDelete: 'CASCADE' });
            Job.hasMany(models.FavouriteJob, { foreignKey: 'job_id', onDelete: 'CASCADE' });
        }
    }

    Job.init(
        {
            job_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            recruiter_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            company_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM('immediately', 'urgent', 'other'),
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            requirement: {
                type: DataTypes.TEXT,
            },
            benefit: {
                type: DataTypes.TEXT,
            },
            min_salary: {
                type: DataTypes.DECIMAL,
            },
            max_salary: {
                type: DataTypes.DECIMAL,
            },
            experience: {
                type: DataTypes.ENUM('intern', 'junior', 'senior', 'lead'),
            },
            status: {
                type: DataTypes.ENUM('open', 'closed'),
                defaultValue: 'open',
            },
            required_cv: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            category_id: {
                type: DataTypes.BIGINT,
            },
            deadline: {
                type: DataTypes.DATE,
            },
            limited: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Job',
            tableName: 'job',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Job;
};
