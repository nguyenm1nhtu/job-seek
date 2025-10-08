'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Wards extends Model {
        static associate(models) {
            Wards.belongsTo(models.Provinces, { foreignKey: 'province_code', onDelete: 'CASCADE' });
            Wards.hasMany(models.Location, { foreignKey: 'ward_code', onDelete: 'SET NULL' });
        }
    }

    Wards.init(
        {
            code: {
                type: DataTypes.STRING(20),
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            province_code: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Wards',
            tableName: 'wards',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Wards;
};
