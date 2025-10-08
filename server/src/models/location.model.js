'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Location extends Model {
        static associate(models) {
            Location.hasMany(models.Candidate, { foreignKey: 'location_id', onDelete: 'CASCADE' });
            Location.hasMany(models.Company, { foreignKey: 'location_id', onDelete: 'CASCADE' });
            Location.hasMany(models.Schedule, { foreignKey: 'location_id', onDelete: 'SET NULL' });
            Location.belongsTo(models.Provinces, { foreignKey: 'province_code', onDelete: 'SET NULL' });
            Location.belongsTo(models.Wards, { foreignKey: 'ward_code', onDelete: 'SET NULL' });
        }
    }

    Location.init(
        {
            location_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            province_code: {
                type: DataTypes.STRING(20),
            },
            ward_code: {
                type: DataTypes.STRING(20),
            },
            address: {
                type: DataTypes.TEXT,
            },
        },
        {
            sequelize,
            modelName: 'Location',
            tableName: 'location',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Location;
};
