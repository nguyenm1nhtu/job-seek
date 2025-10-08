'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Otp extends Model {
        static associate(models) {
            Otp.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
        }
    }

    Otp.init(
        {
            otp_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },

            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },

            code: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },

            expires_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },

        {
            sequelize,
            modelName: 'Otp',
            tableName: 'otp',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Otp;
};
