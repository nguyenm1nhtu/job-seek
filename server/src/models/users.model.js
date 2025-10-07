'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Users extends Model {
        static associate(models) {
            Users.hasOne(models.Candidate, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            Users.hasOne(models.Recruiter, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            Users.hasMany(models.Otp, { foreignKey: 'user_id', onDelete: 'CASCADE' });
            Users.hasMany(models.Notification, { foreignKey: 'user_id', onDelete: 'CASCADE' });
        }
    }

    Users.init(
        {
            user_id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            full_name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(255),
                unique: true,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            avatar_path: {
                type: DataTypes.TEXT,
            },
            role: {
                type: DataTypes.ENUM('candidate', 'recruiter', 'admin'),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Users',
            tableName: 'users',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        },
    );

    return Users;
};
