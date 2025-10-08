'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Provinces extends Model {
        static associate(models) {
            Provinces.hasMany(models.Location, { foreignKey: 'province_code', onDelete: 'SET NULL' });
            Provinces.hasMany(models.Wards, { foreignKey: 'province_code', onDelete: 'CASCADE' });
        }
    }

    Provinces.init(
        {
            code: {
                type: DataTypes.STRING(20),
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Provinces',
            tableName: 'provinces',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Provinces;
};
