'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Company extends Model {
        static associate(models) {
            Company.hasMany(models.Recruiter, { foreignKey: 'company_id', onDelete: 'RESTRICT' });
            Company.hasMany(models.Job, { foreignKey: 'company_id', onDelete: 'RESTRICT' });
            Company.belongsTo(models.Location, { foreignKey: 'location_id', onDelete: 'CASCADE' });
        }
    }

    Company.init(
        {
            company_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            company_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            logo_path: {
                type: DataTypes.TEXT,
            },
            company_description: {
                type: DataTypes.TEXT,
            },
            website: {
                type: DataTypes.TEXT,
            },
            location_id: {
                type: DataTypes.BIGINT,
            },
        },
        {
            sequelize,
            modelName: 'Company',
            tableName: 'company',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Company;
};
