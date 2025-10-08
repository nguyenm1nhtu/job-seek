'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Notification extends Model {
        static associate(models) {
            Notification.belongsTo(models.Users, { foreignKey: 'user_id', onDelete: 'CASCADE' });
        }
    }

    Notification.init(
        {
            notification_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM('info', 'warning', 'alert'),
                allowNull: false,
            },
            is_read: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            sequelize,
            modelName: 'Notification',
            tableName: 'notification',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Notification;
};
