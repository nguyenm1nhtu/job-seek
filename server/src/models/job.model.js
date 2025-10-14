'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Job extends Model {
        static associate(models) {
            Job.belongsTo(models.Recruiter, { foreignKey: 'recruiter_id', onDelete: 'RESTRICT' });
            Job.belongsTo(models.Company, { foreignKey: 'company_id', onDelete: 'RESTRICT' });
            Job.belongsTo(models.Category, { foreignKey: 'category_id', onDelete: 'RESTRICT' });
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
                type: DataTypes.ENUM('urgent', 'immediately', 'other'),
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: DataTypes.TEXT,
            requirement: DataTypes.TEXT,
            benefit: DataTypes.TEXT,
            min_salary: DataTypes.INTEGER,
            max_salary: DataTypes.INTEGER,
            min_experience: DataTypes.INTEGER,
            max_experience: DataTypes.INTEGER,

            status: {
                type: DataTypes.ENUM('open', 'closed'),
                defaultValue: 'open',
            },
            required_cv: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            category_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            deadline: {
                type: DataTypes.DATE,
                allowNull: false,
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
            hooks: {
                beforeCreate: async (job, options) => {
                    const now = new Date();
                    const diffDays = Math.ceil((new Date(job.deadline) - now) / (1000 * 60 * 60 * 24));
                    if (diffDays <= 7) job.type = 'urgent';
                    else if (diffDays <= 30) job.type = 'immediately';
                    else job.type = 'other';
                },
                beforeUpdate: async (job, options) => {
                    if (job.changed('deadline')) {
                        const now = new Date();
                        const diffDays = Math.ceil((new Date(job.deadline) - now) / (1000 * 60 * 60 * 24));
                        if (diffDays <= 7) job.type = 'urgent';
                        else if (diffDays <= 30) job.type = 'immediately';
                        else job.type = 'other';
                    }
                },
            },
        },
    );

    return Job;
};
